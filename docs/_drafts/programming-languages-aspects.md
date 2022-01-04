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
- namespaces
    - inaide od muslwa
- modules
    - file scoped
- pipe

## Languages

[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))

[Python](https://en.wikipedia.org/wiki/Python_(programming_language))

[Perl](https://en.wikipedia.org/wiki/Perl)

[c](https://en.wikipedia.org/wiki/C_(programming_language))

[c++](https://en.wikipedia.org/wiki/C%2B%2B)

[JavaScript](https://en.wikipedia.org/wiki/JavaScript)

[TypeScript](https://en.wikipedia.org/wiki/TypeScript)

[Lua](https://en.wikipedia.org/wiki/Lua_(programming_language))

## Common Objects

Built In types

### Most Essential

- List / Array / Vector (all different)
- Map / Hash / Dictionary
- Set

## Comments

Languages use different comment conventions
https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)#Comments

For single line comments `#`or `//` are the most popular

For multiline comments `/* */` is the most popular (it's convenient if sequences can be nested)

Python docstring serves as documentation built into the language itself which is somewhat convenient

__Python__

```python
# comment
'''
comment
'''

"""
comment
"""
```

`#` requires holding the shift key to press but otherwise is faster then // (two simultaneous key presses)

`'''` is somewhat easy but also annoying to type because of the three characters, technically in python this is a doc string


__C++__

```cpp
// comment

/*
comment
*/
```

`//` is convenient to type
`/* */` is annoying to type because of the shift

__perl__

```perl
# comment
=begin
comment
=cut
```

`=begin` and `=cut` are super inconvenient


__ruby__

```ruby
# comment
=begin
comment
=end
```
bizare as in perl


__sql__

```slq
-- comment
```

## Files and Networking

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


Require same format for all code blocks.

```text
if (condition) {

}

if condition {

}

```

Should all for loops be over ranges or generators? Simplify conditions and avoid logic errors?

Should break or continue be allowed?

Switch or match statement.

```text

// () make it hard to read
for (x in range(5)) {

}

for x in range(5) {

}

foreach (x in range(5)) {

}

for (i : range(5)) {

}

```



super simple embeddable scripting language.

If on the web then needs to execute in JavaScript

- lightweight and fast
- quick to iterate on
- hard to mess up
- macros
- simple scripts
- Extensions
- verify correctness
- avoids common syntax errors
- duel mode - compilable and executable line by line
- easily represented with a graphical programming language perfect translation back and forth
- describable in BNF
- permissions to explicitly specify what language features are allowed to be used in the script (increase security of scripts, disallow unexpected features in called libraries)
    - challenging if calling outside of the script engine since there isn't an easy way to enforce what a dll will do.
    - could specify what libraries and hashes of those libraries are allowed. This would require explicit versioning which would break scripts.
    - all features used should be extractable with a scan of the script.

- typed so functions can have overloads? However this requires that functions have types? Or is there generic catch all functions? for objet can simply apply a type property to allow reflection to see what functions match up.
    - what about function order? If executing in order requires definition before access.

