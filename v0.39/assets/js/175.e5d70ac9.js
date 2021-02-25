(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{695:function(e,g,c){"use strict";c.r(g);var a=c(1),l=Object(a.a)({},(function(){var e=this,g=e.$createElement,c=e._self._c||g;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"state"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),c("h2",{attrs:{id:"parameters-and-base-types"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#parameters-and-base-types"}},[e._v("#")]),e._v(" Parameters and base types")]),e._v(" "),c("p",[c("code",[e._v("Parameters")]),e._v(" define the rules according to which votes are run. There can only\nbe one active parameter set at any given time. If governance wants to change a\nparameter set, either to modify a value or add/remove a parameter field, a new\nparameter set has to be created and the previous one rendered inactive.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEZXBvc2l0UGFyYW1zIHN0cnVjdCB7CiAgTWluRGVwb3NpdCAgICAgICAgc2RrLkNvaW5zICAvLyAgTWluaW11bSBkZXBvc2l0IGZvciBhIHByb3Bvc2FsIHRvIGVudGVyIHZvdGluZyBwZXJpb2QuCiAgTWF4RGVwb3NpdFBlcmlvZCAgdGltZS5UaW1lICAvLyAgTWF4aW11bSBwZXJpb2QgZm9yIEF0b20gaG9sZGVycyB0byBkZXBvc2l0IG9uIGEgcHJvcG9zYWwuIEluaXRpYWwgdmFsdWU6IDIgbW9udGhzCn0K"}}),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWb3RpbmdQYXJhbXMgc3RydWN0IHsKICBWb3RpbmdQZXJpb2QgICAgICB0aW1lLlRpbWUgIC8vICBMZW5ndGggb2YgdGhlIHZvdGluZyBwZXJpb2QuIEluaXRpYWwgdmFsdWU6IDIgd2Vla3MKfQo="}}),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBUYWxseVBhcmFtcyBzdHJ1Y3QgewogIFF1b3J1bSAgICAgICAgICAgIHNkay5EZWMgIC8vICBNaW5pbXVtIHBlcmNlbnRhZ2Ugb2Ygc3Rha2UgdGhhdCBuZWVkcyB0byB2b3RlIGZvciBhIHByb3Bvc2FsIHRvIGJlIGNvbnNpZGVyZWQgdmFsaWQKICBUaHJlc2hvbGQgICAgICAgICBzZGsuRGVjICAvLyAgTWluaW11bSBwcm9wb3J0aW9uIG9mIFllcyB2b3RlcyBmb3IgcHJvcG9zYWwgdG8gcGFzcy4gSW5pdGlhbCB2YWx1ZTogMC41CiAgVmV0byAgICAgICAgICAgICAgc2RrLkRlYyAgLy8gIE1pbmltdW0gcHJvcG9ydGlvbiBvZiBWZXRvIHZvdGVzIHRvIFRvdGFsIHZvdGVzIHJhdGlvIGZvciBwcm9wb3NhbCB0byBiZSB2ZXRvZWQuIEluaXRpYWwgdmFsdWU6IDEvMwp9Cg=="}}),e._v(" "),c("p",[e._v("Parameters are stored in a global "),c("code",[e._v("GlobalParams")]),e._v(" KVStore.")]),e._v(" "),c("p",[e._v("Additionally, we introduce some basic types:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWb3RlIGJ5dGUKCmNvbnN0ICgKICAgIFZvdGVZZXMgICAgICAgICA9IDB4MQogICAgVm90ZU5vICAgICAgICAgID0gMHgyCiAgICBWb3RlTm9XaXRoVmV0byAgPSAweDMKICAgIFZvdGVBYnN0YWluICAgICA9IDB4NAopCgp0eXBlIFByb3Bvc2FsVHlwZSAgc3RyaW5nCgpjb25zdCAoCiAgICBQcm9wb3NhbFR5cGVQbGFpblRleHQgICAgICAgPSAmcXVvdDtUZXh0JnF1b3Q7CiAgICBQcm9wb3NhbFR5cGVTb2Z0d2FyZVVwZ3JhZGUgPSAmcXVvdDtTb2Z0d2FyZVVwZ3JhZGUmcXVvdDsKKQoKdHlwZSBQcm9wb3NhbFN0YXR1cyBieXRlCgoKY29uc3QgKAoJU3RhdHVzTmlsICAgICAgICAgICBQcm9wb3NhbFN0YXR1cyA9IDB4MDAKICAgIFN0YXR1c0RlcG9zaXRQZXJpb2QgUHJvcG9zYWxTdGF0dXMgPSAweDAxICAvLyBQcm9wb3NhbCBpcyBzdWJtaXR0ZWQuIFBhcnRpY2lwYW50cyBjYW4gZGVwb3NpdCBvbiBpdCBidXQgbm90IHZvdGUKICAgIFN0YXR1c1ZvdGluZ1BlcmlvZCAgUHJvcG9zYWxTdGF0dXMgPSAweDAyICAvLyBNaW5EZXBvc2l0IGlzIHJlYWNoZWQsIHBhcnRpY2lwYW50cyBjYW4gdm90ZQogICAgU3RhdHVzUGFzc2VkICAgICAgICBQcm9wb3NhbFN0YXR1cyA9IDB4MDMgIC8vIFByb3Bvc2FsIHBhc3NlZCBhbmQgc3VjY2Vzc2Z1bGx5IGV4ZWN1dGVkCiAgICBTdGF0dXNSZWplY3RlZCAgICAgIFByb3Bvc2FsU3RhdHVzID0gMHgwNCAgLy8gUHJvcG9zYWwgaGFzIGJlZW4gcmVqZWN0ZWQKICAgIFN0YXR1c0ZhaWxlZCAgICAgICAgUHJvcG9zYWxTdGF0dXMgPSAweDA1ICAvLyBQcm9wb3NhbCBwYXNzZWQgYnV0IGZhaWxlZCBleGVjdXRpb24KKQo="}}),e._v(" "),c("h2",{attrs:{id:"deposit"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[e._v("#")]),e._v(" Deposit")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICB0eXBlIERlcG9zaXQgc3RydWN0IHsKICAgIEFtb3VudCAgICAgIHNkay5Db2lucyAgICAgICAvLyAgQW1vdW50IG9mIGNvaW5zIGRlcG9zaXRlZCBieSBkZXBvc2l0b3IKICAgIERlcG9zaXRvciAgIGNyeXB0by5hZGRyZXNzICAvLyAgQWRkcmVzcyBvZiBkZXBvc2l0b3IKICB9Cg=="}}),e._v(" "),c("h2",{attrs:{id:"validatorgovinfo"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#validatorgovinfo"}},[e._v("#")]),e._v(" ValidatorGovInfo")]),e._v(" "),c("p",[e._v("This type is used in a temp map when tallying")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICB0eXBlIFZhbGlkYXRvckdvdkluZm8gc3RydWN0IHsKICAgIE1pbnVzICAgICBzZGsuRGVjCiAgICBWb3RlICAgICAgVm90ZQogIH0K"}}),e._v(" "),c("h2",{attrs:{id:"proposals"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),c("p",[c("code",[e._v("Proposal")]),e._v(" objects are used to account votes and generally track the proposal's state. They contain "),c("code",[e._v("Content")]),e._v(" which denotes\nwhat this proposal is about, and other fields, which are the mutable state of\nthe governance process.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9wb3NhbCBzdHJ1Y3QgewoJQ29udGVudCAgLy8gUHJvcG9zYWwgY29udGVudCBpbnRlcmZhY2UKCglQcm9wb3NhbElEICAgICAgIHVpbnQ2NCAKCVN0YXR1cyAgICAgICAgICAgUHJvcG9zYWxTdGF0dXMgIC8vIFN0YXR1cyBvZiB0aGUgUHJvcG9zYWwge1BlbmRpbmcsIEFjdGl2ZSwgUGFzc2VkLCBSZWplY3RlZH0KCUZpbmFsVGFsbHlSZXN1bHQgVGFsbHlSZXN1bHQgICAgIC8vIFJlc3VsdCBvZiBUYWxsaWVzCgoJU3VibWl0VGltZSAgICAgdGltZS5UaW1lICAvLyBUaW1lIG9mIHRoZSBibG9jayB3aGVyZSBUeEdvdlN1Ym1pdFByb3Bvc2FsIHdhcyBpbmNsdWRlZAoJRGVwb3NpdEVuZFRpbWUgdGltZS5UaW1lICAvLyBUaW1lIHRoYXQgdGhlIFByb3Bvc2FsIHdvdWxkIGV4cGlyZSBpZiBkZXBvc2l0IGFtb3VudCBpc24ndCBtZXQKCVRvdGFsRGVwb3NpdCAgIHNkay5Db2lucyAgLy8gQ3VycmVudCBkZXBvc2l0IG9uIHRoaXMgcHJvcG9zYWwuIEluaXRpYWwgdmFsdWUgaXMgc2V0IGF0IEluaXRpYWxEZXBvc2l0CgoJVm90aW5nU3RhcnRUaW1lIHRpbWUuVGltZSAgLy8gIFRpbWUgb2YgdGhlIGJsb2NrIHdoZXJlIE1pbkRlcG9zaXQgd2FzIHJlYWNoZWQuIC0xIGlmIE1pbkRlcG9zaXQgaXMgbm90IHJlYWNoZWQKCVZvdGluZ0VuZFRpbWUgICB0aW1lLlRpbWUgIC8vIFRpbWUgdGhhdCB0aGUgVm90aW5nUGVyaW9kIGZvciB0aGlzIHByb3Bvc2FsIHdpbGwgZW5kIGFuZCB2b3RlcyB3aWxsIGJlIHRhbGxpZWQKfQo="}}),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb250ZW50IGludGVyZmFjZSB7CglHZXRUaXRsZSgpIHN0cmluZwoJR2V0RGVzY3JpcHRpb24oKSBzdHJpbmcKCVByb3Bvc2FsUm91dGUoKSBzdHJpbmcKCVByb3Bvc2FsVHlwZSgpIHN0cmluZwoJVmFsaWRhdGVCYXNpYygpIHNkay5FcnJvcgoJU3RyaW5nKCkgc3RyaW5nCn0K"}}),e._v(" "),c("p",[e._v("The "),c("code",[e._v("Content")]),e._v(" on a proposal is an interface which contains the information about\nthe "),c("code",[e._v("Proposal")]),e._v(" such as the tile, description, and any notable changes. Also, this\n"),c("code",[e._v("Content")]),e._v(" type can by implemented by any module. The "),c("code",[e._v("Content")]),e._v("'s "),c("code",[e._v("ProposalRoute")]),e._v("\nreturns a string which must be used to route the "),c("code",[e._v("Content")]),e._v("'s "),c("code",[e._v("Handler")]),e._v(" in the\ngovernance keeper. This allows the governance keeper to execute proposal logic\nimplemented by any module. If a proposal passes, the handler is executed. Only\nif the handler is successful does the state get persisted and the proposal finally\npasses. Otherwise, the proposal is rejected.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIYW5kbGVyIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBjb250ZW50IENvbnRlbnQpIHNkay5FcnJvcgo="}}),e._v(" "),c("p",[e._v("The "),c("code",[e._v("Handler")]),e._v(" is responsible for actually executing the proposal and processing\nany state changes specified by the proposal. It is executed only if a proposal\npasses during "),c("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),c("p",[e._v("We also mention a method to update the tally for a given proposal:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICBmdW5jIChwcm9wb3NhbCBQcm9wb3NhbCkgdXBkYXRlVGFsbHkodm90ZSBieXRlLCBhbW91bnQgc2RrLkRlYykK"}}),e._v(" "),c("h2",{attrs:{id:"stores"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#stores"}},[e._v("#")]),e._v(" Stores")]),e._v(" "),c("p",[c("em",[e._v("Stores are KVStores in the multi-store. The key to find the store is the first\nparameter in the list")]),e._v("`")]),e._v(" "),c("p",[e._v("We will use one KVStore "),c("code",[e._v("Governance")]),e._v(" to store two mappings:")]),e._v(" "),c("ul",[c("li",[e._v("A mapping from "),c("code",[e._v("proposalID|'proposal'")]),e._v(" to "),c("code",[e._v("Proposal")]),e._v(".")]),e._v(" "),c("li",[e._v("A mapping from "),c("code",[e._v("proposalID|'addresses'|address")]),e._v(" to "),c("code",[e._v("Vote")]),e._v(". This mapping allows\nus to query all addresses that voted on the proposal along with their vote by\ndoing a range query on "),c("code",[e._v("proposalID:addresses")]),e._v(".")])]),e._v(" "),c("p",[e._v("For pseudocode purposes, here are the two function we will use to read or write in stores:")]),e._v(" "),c("ul",[c("li",[c("code",[e._v("load(StoreKey, Key)")]),e._v(": Retrieve item stored at key "),c("code",[e._v("Key")]),e._v(" in store found at key "),c("code",[e._v("StoreKey")]),e._v(" in the multistore")]),e._v(" "),c("li",[c("code",[e._v("store(StoreKey, Key, value)")]),e._v(": Write value "),c("code",[e._v("Value")]),e._v(" at key "),c("code",[e._v("Key")]),e._v(" in store found at key "),c("code",[e._v("StoreKey")]),e._v(" in the multistore")])]),e._v(" "),c("h2",{attrs:{id:"proposal-processing-queue"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#proposal-processing-queue"}},[e._v("#")]),e._v(" Proposal Processing Queue")]),e._v(" "),c("p",[c("strong",[e._v("Store:")])]),e._v(" "),c("ul",[c("li",[c("code",[e._v("ProposalProcessingQueue")]),e._v(": A queue "),c("code",[e._v("queue[proposalID]")]),e._v(" containing all the\n"),c("code",[e._v("ProposalIDs")]),e._v(" of proposals that reached "),c("code",[e._v("MinDeposit")]),e._v(". During each "),c("code",[e._v("EndBlock")]),e._v(",\nall the proposals that have reached the end of their voting period are processed.\nTo process a finished proposal, the application tallies the votes, computes the\nvotes of each validator and checks if every validator in the validator set has\nvoted. If the proposal is accepted, deposits are refunded. Finally, the proposal\ncontent "),c("code",[e._v("Handler")]),e._v(" is executed.")])]),e._v(" "),c("p",[e._v("And the pseudocode for the "),c("code",[e._v("ProposalProcessingQueue")]),e._v(":")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICBpbiBFbmRCbG9jayBkbwoKICAgIGZvciBmaW5pc2hlZFByb3Bvc2FsSUQgaW4gR2V0QWxsRmluaXNoZWRQcm9wb3NhbElEcyhibG9jay5UaW1lKQogICAgICBwcm9wb3NhbCA9IGxvYWQoR292ZXJuYW5jZSwgJmx0O3Byb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDspIC8vIHByb3Bvc2FsIGlzIGEgY29uc3Qga2V5CgogICAgICB2YWxpZGF0b3JzID0gS2VlcGVyLmdldEFsbFZhbGlkYXRvcnMoKQogICAgICB0bXBWYWxNYXAgOj0gbWFwKHNkay5BY2NBZGRyZXNzKVZhbGlkYXRvckdvdkluZm8KCiAgICAgIC8vIEluaXRpYXRlIG1hcHBpbmcgYXQgMC4gVGhpcyBpcyB0aGUgYW1vdW50IG9mIHNoYXJlcyBvZiB0aGUgdmFsaWRhdG9yJ3Mgdm90ZSB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB0aGVpciBkZWxlZ2F0b3IncyB2b3RlcwogICAgICBmb3IgZWFjaCB2YWxpZGF0b3IgaW4gdmFsaWRhdG9ycwogICAgICAgIHRtcFZhbE1hcCh2YWxpZGF0b3IuT3BlcmF0b3JBZGRyKS5NaW51cyA9IDAKCiAgICAgIC8vIFRhbGx5CiAgICAgIHZvdGVySXRlcmF0b3IgPSByYW5nZVF1ZXJ5KEdvdmVybmFuY2UsICZsdDtwcm9wb3NhbElEfCdhZGRyZXNzZXMnJmd0OykgLy9yZXR1cm4gYWxsIHRoZSBhZGRyZXNzZXMgdGhhdCB2b3RlZCBvbiB0aGUgcHJvcG9zYWwKICAgICAgZm9yIGVhY2ggKHZvdGVyQWRkcmVzcywgdm90ZSkgaW4gdm90ZXJJdGVyYXRvcgogICAgICAgIGRlbGVnYXRpb25zID0gc3Rha2luZ0tlZXBlci5nZXREZWxlZ2F0aW9ucyh2b3RlckFkZHJlc3MpIC8vIGdldCBhbGwgZGVsZWdhdGlvbnMgZm9yIGN1cnJlbnQgdm90ZXIKCiAgICAgICAgZm9yIGVhY2ggZGVsZWdhdGlvbiBpbiBkZWxlZ2F0aW9ucwogICAgICAgICAgLy8gbWFrZSBzdXJlIGRlbGVnYXRpb24uU2hhcmVzIGRvZXMgTk9UIGluY2x1ZGUgc2hhcmVzIGJlaW5nIHVuYm9uZGVkCiAgICAgICAgICB0bXBWYWxNYXAoZGVsZWdhdGlvbi5WYWxpZGF0b3JBZGRyKS5NaW51cyArPSBkZWxlZ2F0aW9uLlNoYXJlcwogICAgICAgICAgcHJvcG9zYWwudXBkYXRlVGFsbHkodm90ZSwgZGVsZWdhdGlvbi5TaGFyZXMpCgogICAgICAgIF8sIGlzVmFsID0gc3Rha2luZ0tlZXBlci5nZXRWYWxpZGF0b3Iodm90ZXJBZGRyZXNzKQogICAgICAgIGlmIChpc1ZhbCkKICAgICAgICAgIHRtcFZhbE1hcCh2b3RlckFkZHJlc3MpLlZvdGUgPSB2b3RlCgogICAgICB0YWxseWluZ1BhcmFtID0gbG9hZChHbG9iYWxQYXJhbXMsICdUYWxseWluZ1BhcmFtJykKCiAgICAgIC8vIFVwZGF0ZSB0YWxseSBpZiB2YWxpZGF0b3Igdm90ZWQgdGhleSB2b3RlZAogICAgICBmb3IgZWFjaCB2YWxpZGF0b3IgaW4gdmFsaWRhdG9ycwogICAgICAgIGlmIHRtcFZhbE1hcCh2YWxpZGF0b3IpLkhhc1ZvdGVkCiAgICAgICAgICBwcm9wb3NhbC51cGRhdGVUYWxseSh0bXBWYWxNYXAodmFsaWRhdG9yKS5Wb3RlLCAodmFsaWRhdG9yLlRvdGFsU2hhcmVzIC0gdG1wVmFsTWFwKHZhbGlkYXRvcikuTWludXMpKQoKCgogICAgICAvLyBDaGVjayBpZiBwcm9wb3NhbCBpcyBhY2NlcHRlZCBvciByZWplY3RlZAogICAgICB0b3RhbE5vbkFic3RhaW4gOj0gcHJvcG9zYWwuWWVzVm90ZXMgKyBwcm9wb3NhbC5Ob1ZvdGVzICsgcHJvcG9zYWwuTm9XaXRoVmV0b1ZvdGVzCiAgICAgIGlmIChwcm9wb3NhbC5Wb3Rlcy5ZZXNWb3Rlcy90b3RhbE5vbkFic3RhaW4gJmd0OyB0YWxseWluZ1BhcmFtLlRocmVzaG9sZCBBTkQgcHJvcG9zYWwuVm90ZXMuTm9XaXRoVmV0b1ZvdGVzL3RvdGFsTm9uQWJzdGFpbiAgJmx0OyB0YWxseWluZ1BhcmFtLlZldG8pCiAgICAgICAgLy8gIHByb3Bvc2FsIHdhcyBhY2NlcHRlZCBhdCB0aGUgZW5kIG9mIHRoZSB2b3RpbmcgcGVyaW9kCiAgICAgICAgLy8gIHJlZnVuZCBkZXBvc2l0cyAobm9uLXZvdGVycyBhbHJlYWR5IHB1bmlzaGVkKQogICAgICAgIGZvciBlYWNoIChhbW91bnQsIGRlcG9zaXRvcikgaW4gcHJvcG9zYWwuRGVwb3NpdHMKICAgICAgICAgIGRlcG9zaXRvci5BdG9tQmFsYW5jZSArPSBhbW91bnQKCiAgICAgICAgc3RhdGVXcml0ZXIsIGVyciA6PSBwcm9wb3NhbC5IYW5kbGVyKCkKICAgICAgICBpZiBlcnIgIT0gbmlsCiAgICAgICAgICAgIC8vIHByb3Bvc2FsIHBhc3NlZCBidXQgZmFpbGVkIGR1cmluZyBzdGF0ZSBleGVjdXRpb24KICAgICAgICAgICAgcHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9IFByb3Bvc2FsU3RhdHVzRmFpbGVkCiAgICAgICAgIGVsc2UKICAgICAgICAgICAgLy8gcHJvcG9zYWwgcGFzcyBhbmQgc3RhdGUgaXMgcGVyc2lzdGVkCiAgICAgICAgICAgIHByb3Bvc2FsLkN1cnJlbnRTdGF0dXMgPSBQcm9wb3NhbFN0YXR1c0FjY2VwdGVkCiAgICAgICAgICAgIHN0YXRlV3JpdGVyLnNhdmUoKQogICAgICBlbHNlCiAgICAgICAgLy8gcHJvcG9zYWwgd2FzIHJlamVjdGVkCiAgICAgICAgcHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9IFByb3Bvc2FsU3RhdHVzUmVqZWN0ZWQKCiAgICAgIHN0b3JlKEdvdmVybmFuY2UsICZsdDtwcm9wb3NhbElEfCdwcm9wb3NhbCcmZ3Q7LCBwcm9wb3NhbCkK"}})],1)}),[],!1,null,null,null);g.default=l.exports}}]);