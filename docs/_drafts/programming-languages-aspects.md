# Aspects of Programming Languages

This aims to be a summary of features developed for programming languages:

Programming languages cannot be separated from their development environments or execution engines.

## Features

- Shell
    - REPL
- Debugging
- IntelliSense
- Libraries
- Package Management
- Errors
    - Syntax Errors
    - Runtime Errors
    - Error Handling
- Types
    - Custom Defined Types
    - Built In Types
    - Dynamic
    - Duck Typing
    - Strong Typing
- Built In Types
    - rational numbers
    - complex numbers
    - arbitrary-precision arithmetic
- Strings
    - Unicode
    - Other encodings
- String Interpolation
- Objects
- Iterators
- Generators
- Blocks
    - Scope
- Default Arguments
- Memory Control
    - Garbage Collection
    - RAII
    - new / delete
- Operator Overloading
- threads / fibers
- Execution
    - Compilation
    - JIT compilation
    - interpreted
- expressions
    - boolean expressions
- bit manipulation
- ternary expressions
- mutable and immutable
- destructure objects
- eval
- macros
- comments
- structures
    - struct
    - union
    - enum

## Languages

[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))

[Python](https://en.wikipedia.org/wiki/Python_(programming_language))

[Perl]()

[c](https://en.wikipedia.org/wiki/C_(programming_language))

[c++]()

[JavaScript]()

[TypeScript]()

## Common Objects

Built In types

### Most Essential

- List / Array / Vector (all different)
- Map / Hash / Dictionary
- Set

## List

__Python__

```python
l = list() # l = []
```

a type of mutable sequence

Implemented as an array of pointers

- sort
- append
- extend
- clear
- copy
- insert
- pop
- remove
- reverse

__C++__

```cpp
std::list<int> l;
```

Implemented as doubly linked list

- front
- back
- push_front
- pop_front
- push_back
- pop_back
- insert
- erase
- clear
- remove
- unique
- sort
- reverse

Array - fixed size sequence

```cpp
std::array<int> l;
```

- operator[] or at
- front
- back

Vector

```cpp
std::vector<int> l;
```

- operator[] or at
- push_back
- pop_back
- insert
- clear

__C__

c simply has a normal array

__JavaScript__

```javascript

let l = []

```

In V8 engine array of pointers. If the array only contains integers than uses C++ vector until it contains an object.

JavaScript array contains sequence operations (map, filter, reduce) on the object itself, this contrasts with the Python and C++ approaches of methods called on sequences.

- at
- fill
- filter
- map
- find
- findIndex
- flat
- forEach
- includes
- indexOf
- map
- pop
- push
- reverse
- some
- sort
- reduce


__C#__

```csharp
List<int> l = new List<int>();
```

Implemented similar to C++ vector to allow fast lookup by index.

- add
- clear
- contains
- exists
- find
- findIndex
- findLastIndex
- forEach
- indexOf
- lastIndexOf
- remove
- removeAll
- removeAt
- reverse
- sort

## Evaluating Languages

- Programmer Productivity
- Ease of Learning
- Ease of First Draft
- Ease of Maintainance


Is there a Mathematical language? One suited to writing out equations and solving them? Needs to explain how the problem is solved

## Core Features



## Desireable Properties

Clearly defined and understandable Variable Scope and lifetime.

Ownership of variables

Definition of access of variable names
    - need clearly defined blocks