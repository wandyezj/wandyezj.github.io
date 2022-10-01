# Safe Script Technical

Implementation details for initial Safe Script prototype.

## Goals

- Cross Platform
- No External Dependencies
- Allow easy embedding into other applications

- Can link into Python and JavaScript libraries.
- note: can always create a JSON style interface and link into separate exe processes but this is not super efficient.

## Architecture

exe that contains everything

dll that can be accessed by other applications cross platform

## Language Choice


It is convenient to be able to run 



`C#` can compile once and run everywhere by embedding the C# environment into the executable. 
