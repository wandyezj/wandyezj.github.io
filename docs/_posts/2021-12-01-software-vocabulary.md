---
layout: post
title:  "Software Vocabulary"
date:   2021-12-01 20:00:00 -0700
tags: software
---

Some basic software vocabulary with links to wikipedia.

## Programs

- program
    - A program is a collection of program statements that performs a specific task when run by a computer. A program is often referred to as software.
    - [Wikipedia - Computer Program](https://en.wikipedia.org/wiki/Computer_program)

- program behavior
    - Program behavior is how a program functions during execution and is often described by how a user interacts with it.

- program input
    - Program input is data sent to a computer for processing by a program. Input can come in a variety of forms, such as tactile, audio, visual, or text.

- program output
    - Program output is any data sent from a program to a device. Program output can come in a variety of forms, such as tactile, audio, visual, or text.

- program documentation
    - Program documentation is a written description of the function of a code segment, event, procedure, or program and how it was developed.
    - [Wikipedia - Software Documentation](https://en.wikipedia.org/wiki/Software_documentation)



## Code

- comments
    - Comments are a form of program documentation written into the program to be read by people and do not affect how a program runs.
    - [Wikipedia - Comment (computer programming)](https://en.wikipedia.org/wiki/Comment_(computer_programming))

- code segment
    - A code segment refers to a collection of program statements that are part of a program.

- code statement
    - A code statement is a part of program code that expresses an action to be carried out.
    - [Wikipedia - Statement (computer science)](https://en.wikipedia.org/wiki/Statement_(computer_science))

- expression
    - An expression can consist of a value, a variable, an operator, or a procedure call that returns a value.
    - [Wikipedia - Expression (computer science)](https://en.wikipedia.org/wiki/Expression_%28computer_science%29)


- variable
    - A variable is an abstraction inside a program that can hold a value. Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.

- procedure
    - A procedure is a named group of programming instructions that may have parameters and return values. Also known as functions.
    - [Wikipedia - Procedure (computer science)](https://en.wikipedia.org/wiki/Subroutine)

- parameter
    - Parameters are input variables of a procedure.
    - [Wikipedia - Parameter (computer programming)](https://en.wikipedia.org/wiki/Parameter_(computer_programming))

- argument
    - Arguments specify the values of the parameters when a procedure is called.

- event
    - Events are associated with an action and supplies input data to a program.
    - [Wikipedia - Event (computing)](https://en.wikipedia.org/wiki/Event_(computing))

- library
    - a collection of functions that can be added to the code

- Application Program Interface (API)
    - a description of what each function in the library does and how to use it


## Development

- iterative development process
    - An iterative development process requires refinement and revision based on feedback, testing, or reflection throughout the process. This may require revisiting earlier phases of the process.
    - [Wikipedia - Iterative and incremental development](https://en.wikipedia.org/wiki/Iterative_and_incremental_development)

- incremental development process
    - An incremental development process is one that breaks the problem into smaller pieces and makes sure each piece works before adding it to the whole.

- testing
    - Testing uses defined inputs to ensure that an algorithm or program is producing the expected outcomes. Programmers use the results from testing to revise their algorithms or programs.
    - [Wikipedia - software testing](https://en.wikipedia.org/wiki/Software_testing)

## Errors

- syntax error
    - A syntax error mistake in the program where the rules of the programming language are not followed.
    - [Wikipedia - Syntax error](https://en.wikipedia.org/wiki/Syntax_error)

- runtime error
    - A runtime error is a mistake in the program that occurs during the execution of a program. Programming languages define their own run-time errors.
    - [Wikipedia - Runtime (program lifecycle phase)](https://en.wikipedia.org/wiki/Runtime_(program_lifecycle_phase))

- logic error
    - A logical error is a mistake in the algorithm or program that causes it to behave incorrectly or unexpectedly.
    - [Wikipedia - Logic error](https://en.wikipedia.org/wiki/Logic_error)


## Variables

scope

- global variable
    - Global variables are defined outside of any function and can be used anywhere in a program.
    - Overusing global variables quickly leads to unclear, unmanageable, and buggy code
    - Use globals as little as possible.
    - [Wikipedia - Global Variable](https://en.wikipedia.org/wiki/Global_variable)

- local variables
    - like function parameters. These variables can only be used in the functions that they are defined in.
    - Do not use a local with the same name as a global. This can be confusing and should be avoided.
    - [Wikipedia - Local Variable](https://en.wikipedia.org/wiki/Local_variable)

### lists

- index
    - An index is a common method for referencing the elements in a list or string using natural numbers.

- element
    - An element is an individual value in a list that is assigned a unique index.

## General

- Multi-factor Authentication
    - A user is granted access only after successfully presenting two or more pieces of evidence (or factors) to an authentication mechanism: knowledge (something only the user knows), possession (something only the user has), or inherence (something only the user is).
    - Includes: two factor authentication (2FA)
    - [Wikipedia - Multi-factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)

## Boolean Comparisions

(x < y)	is x less than y?
(x <= y)	is x less than or equal to y?
(x == y)	is x equal to y?
(x != y)	is x not equal to y?
(x > y)	is x greater than y?
(x >= y)	is x greater than or equal to y?

- Inclusive or
    - either of the or conditions
- Exclusive or
    - only a single one of the or conditions

- compound conditional
    - use and, or, and not
- nested conditionals
    - nesting if statements inside other if statements

## Types

- integers
    - Numbers such as 42, 0, and -5
- floats
    - Numbers with a decimal point, such as 1.2, -5.8, and 3.0
- strings
    - Characters within single or double quotes, such as 'hello' and "this works, too!"
- booleans
    - One of two values: True or False
- lists
    - An ordered sequence of stored values

## Strings

- string
    - A string is an ordered sequence of characters.
- substring
    - A substring is a string that is a part of an existing string.


## Python

`int()`
    - converts value to integer
`str()`
    - converts value to string

## College Board Syntax Cheat Sheet

```text
IF(condition)
{
  conditional body
}
```

```
IF(condition)
{
  first conditional body
}ELSE
{
  second conditional body
}
```

```
PROCEDURE procName(parameter1, parameter2, …)
{
  procedure body
  RETURN(expression)
}

result ← procName(arg1, arg2, …)
```

To test if a is equal to b: a = b
To test if a is not equal to b: a ≠ b
To test if a is greater than b: a > b
To test if a is less than b: a < b
To test if a is greater than or equal to b: a ≥ b
To test if a is less than or equal to b: a ≤ b

```text
AND instead of and
OR instead of or
NOT instead of not
operators can use both boolean value True, False and boolean expressions
```

```
INPUT()
```

Unlike some programming languages, both Python and the programming language used on the AP Exam have no limit on how large a number can be, as long as the computer's memory can store it. 