# Programming Languages Compilers

https://medium.com/hackernoon/compilers-and-interpreters-3e354a2e41cf

- Lexical Analysis
    - lexeme
        - unique strings of characters
    - token
        - object describing the lexeme
        - includes position line, column in the source code
    - errors if encounters an invalid token
- Syntax Analysis
    - generates Abstract Syntax Tree (AST)
    - errors if language grammar is incorrect
- Semantic Analysis
    - Type inference - annotation of AST nodes with type information
    - Type checking - check that all values assigned to variables and arguments have the correct type
    - Symbol management
        - symbol table - information about all names in the program
    - outputs annotated AST and syymbol table
- Code Generation


- interpreter
    - directly executes instruction in source programming language
- compiler 
    - translates instructions to machine code


## Putting Pieces Togethers

Goal:

single file fully contained `script.exe` that can run a script or translate it to compilable C code. Written completely in C with minimal dependencies.

https://github.com/westes/flexs

flex generates scanners. scanners finds lexical patterns in tex.

https://github.com/python/cpython

Does the entire program need to be analyzed at once or for an interpreted language can it be done statement by statement?