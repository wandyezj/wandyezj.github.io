# Universal Document

A Universal Document is optimized to create, tell, and explore stories.

## State

The current state is that multiple applications are used to create, tell, and explore stories, text documents, numerical analysis documents, and presentation documents.

## Target

Why not have a single universal document that can be used to create, tell, and explore stories?


## Proposal

Documents are composed of multiple components:

- Tables
- Charts
- Text
- Images
- Video
- Visuals
- Code
- Sequences
- References

Components can be thought of as individual windows on a larger canvas.

The general format for creating a story is to:

- write up the exploration
- analyze sources and data
- put the analysis together
- create a presentation of some format

What do the interactions look like?

Can components link to components in other documents?

### Component Model

Some components stand alone, other components depend on other components as sources of data. For example: a Chart could depend on a Table and as the table changes the Chart changes. In this aspect a document is potentially fluid as the data backing the document changes the representations of that data change.

How can components be structured so that they may interact with each other? Components could have a set of Standard Interfaces that determine what types of interactions ae available with that component.

Components need to know when components they are dependent on change so that they can refresh themselves to show the latest data. For example: Pie Chart that displays aggregate data from a Table. The Chart needs to know when the Table data has changed so it can refresh itself.

Conceptually the simplest interface is an alert mechanism where the Table component alerts the Chart component that the data has changed and the Chart aggregates the data and updates itself.

The document can be thought of a set of node windows that reference each other through edges to form a directed acyclic graph. A path of nodes referring to each other can be thought of as a chain. It's important to avoid cyclic graphs as these could result in infinite updates. One way to avoid cyclic graphs is to ensure that each component type can only reference other component types such that no cyclic graphs may form. For example in the case of two component types {A, B} if type A could only reference type B or type B could only reference type A or neither type can reference each other, there is no way for form a cyclic graph. Realistically it is likely desirable for component types to reference themselves and other components in ways that could form cyclic graphs, so another mechanism is needed to check that no cycles are formed. One way to ensure no cycles are formed between component instances is for each instance to be given an instance id and to contain a set of all instance id that the instance depends on either directly or indirectly. When a component updates it receives all dependent instance ids and checks that its own instance id is not among them. If the component detects that is self references it can error or report the cyclic chain that resulted in the self reference.

Questions around performance optimization: If there are multiple Charts that reference the same Table and that use the same aggregation is it reasonable to force every reference component to refresh itself? Is it more performant to run each component in its own thread, even if they are doing the same aggregation? How likely is it that multiple nodes will have the same aggregation? What is the expected depth of chains? How complex is it to implement additional performance logic?

It might be preferable to keep implementation simple, avoid unnecessary refreshes and simply run each node refresh on a separate thread. An initial thought is that most chains will be relatively short, and the computational cost of a refresh will be low for most nodes. Only with massive data sets will the cost of computation become higher, although it's possible that these individual updates could be sped up with the use of threads, optimized queries, or more targeted refresh mechanisms.

There is also a concept of when a window needs to be refreshed if a window is never viewed or consumed there is no need to refresh the window. For Example: if there were a markdown editor component and a markdown view component, the view would only need to be rendered if someone is currently looking at it and the editor has changed underlying data. It would be sufficient to render once and cache the result and to only refresh the result if the underlying data were updated.
