# Programming Languages Exception Handling


`try` `catch` `except`

`raise` `throw`

- exceptions are almost an expectation in modern programming languages
    - Are exceptions needed for scripts?
    - fetch

- should exceptions be strongly typed in the catch?


- checked exceptions
    - annoying!
    - couldn't this simply be detected via static analysis and checked as a linter information if an exception is unhandled?

Implementation Methods:

- static lookup table
    - more efficient
- dynamic reference tracking
    - provably correct
    - less efficient


Properties of Exceptions

- id - number
    - really every 
- name - string
- message - can be created at runtime