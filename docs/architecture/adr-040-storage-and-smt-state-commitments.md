# ADR 040: Storage and SMT State Commitments

## Changelog

- 2020-01-15: Draft

## Status

DRAFT Not Implemented


## Abstract

Sparse Merke Tree (SMT) is a version of a Merkle Tree with various storage and performance optimizations. This ADR defines a separation of state commitments from data storage and the SDK transition from IAVL to SMT.


## Context

Currently, Cosmos SDK uses IAVL for both state commitments and data storage.

IAVL has effectively become an orphaned project within the Cosmos ecosystem and it's proven to be an inefficient state commitment.
In the current design, IAVL is used for both data storage and as a Merkle Tree for state commitments. IAVL is meant to be a standalone Merkelized key/value database, however it's using a KV DB engine to store all tree nodes. So, each node is stored in a separate record in the KV DB. This causes many inefficiencies and problems:

+ Each object select requires a tree traversal from the root
+ Each edge traversal requires a DB query (nodes are not stored in a memory)
+ Creating snapshots is [expensive](https://github.com/cosmos/cosmos-sdk/issues/7215#issuecomment-684804950). It takes about 30 seconds to export less than 100 MB of state (as of March 2020).
+ Updates in IAVL may trigger tree reorganization and possible O(log(n)) hashes re-computation, which can become a CPU bottleneck.
+ The leaf structure is pretty expensive: it contains the `(key, value)` pair, additional metadata such as height, version. The entire node is hashed, and that hash is used as the key in the underlying database, [ref](https://github.com/cosmos/iavl/blob/master/docs/node/node.md
).


Moreover, the IAVL project lacks a support and we already see better, well adapted alternatives. Instead of optimizing the IAVL, we are looking in another solutions for both storage and state commitments.


## Decision

We propose separate the concerns of state commitment (**SC**), needed for consensus, and state storage (**SS**), needed for state machine. Finally we replace IAVL with LazyLedger SMT.


### Decouple state commitment from storage

Separation of storage and SMT will allow a specialization in terms of various optimization patterns.

SMT will use it's own storage (could use the same database underneath) from the state machine store. For every `(key, value)` pair, the SMT will store `hash(key)` in a path and `hash(key, value)` in a leaf.

For data access we propose 2 additional KV buckets:
1. B1: `key → value`: the principal object storage, used by a state machine, behind the SDK `KVStore` interface.
2. B2: `hash(key, value) → key`: an index needed to extract a value (through: B2 -> B1) having a only a Merkle Path. Recall that SMT will store `hash(key, value)` in it's leafs.
3. we could use more buckets to optimize the app usage if needed.

Above, we propose to use KV DB. However, for state machine we could use RDBMS, which we discuss below.


### Requirements

State Storage requirements:
+ range queries
+ quick (key, value) access
+ creating a snapshot

State Commitment requirements:
+ fast updates
+ path length should be short
+ creating a snapshot
+ pruning


### LazyLedger SMT for State Commitment

A Sparse Merkle tree is based on the idea of a complete Merkle tree of an intractable size. The assumption here is that as the size of the tree is intractable, there would only be a few leaf nodes with valid data blocks relative to the tree size, rendering the tree as sparse.

TODO:
+ describe pruning and version management

### Snapshots

One of the Stargate core features are snapshots and fast sync. Currently this feature is implemented through IAVL.
Many underlying DB engines support snapshotting. Hence, we propose to reuse that functionality and limit the supported DB engines to ones which support snapshots (Badger, RocksDB, BoltDB)

### Pruning

TODO: discuss state storage pruning requirements

## Consequences


### Backwards Compatibility

This ADR doesn't introduce any SDK level API changes.

We change a storage layout, so storage migration and a blockchain reboot is required.

### Positive

+ Decoupling state from state commitment introduce better engineering opportunities for further optimizations and better storage patterns.
+ Performance improvements.
+ Joining SMT based camp which has wider and proven adoption than IAVL.

### Negative

+ Storage migration

### Neutral

+ Deprecating IAVL, which is one of the core proposals of Cosmos Whitepaper.

## Further Discussions

### RDBMS

Use of RDBMS instead of simple KV store for state. Use of RDBMS will require an SDK API breaking change (`KVStore` interface), will allow better data extraction and indexing solutions. Instead of saving an object as a single blob of bytes, we could save it as record in a table in the state storage layer, and as a `hash(key, protobuf(object))` in the SMT as outlined above. To verify that an object registered in RDBMS is same as the one committed to SMT, one will need to load it from RDBMS, marshal using protobuf, hash and do SMT search.


## References

- [IAVL What's Next?](https://github.com/cosmos/cosmos-sdk/issues/7100)
- [IAVL overview](https://docs.google.com/document/d/16Z_hW2rSAmoyMENO-RlAhQjAG3mSNKsQueMnKpmcBv0/edit#heading=h.yd2th7x3o1iv) of it's state v0.15
- [State commitments and storage report](https://paper.dropbox.com/published/State-commitments-and-storage-review--BDvA1MLwRtOx55KRihJ5xxLbBw-KeEB7eOd11pNrZvVtqUgL3h)