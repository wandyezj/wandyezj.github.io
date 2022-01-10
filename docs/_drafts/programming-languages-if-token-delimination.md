---
layout: post
title:  "Programming Languages - if token delimitation"
date:   2022-01-09 12:00:00 -0700
categories: software programming languages
---

Conditional logic is key in many programs. Most programming languages provide an `if` statement to allow for conditional branches. If statements execute a `conditional block` of statements if the `condition` expression evaluates to true.

A key task for the `if` statement construct is to delimitate the `condition` and the `conditional block`.

This essay examines different systems of if statement delimitation for the `condition` and `conditional block`.

## Example if statements in different languages

Example if statement for a `conditional block` in: C, C++, C#, Java, JavaScript

```c
if (condition) {
    // conditional block
    conditional_statement();
}
```

`note`: Some languages allow the curly braces to be excluded for a single statements. Many style guides recommend that curly braces be used consistently even if there is a single statement. Some reasons include: consistency and prevention of errors when new statements are added.

Example if statement for single conditional statement in: C, C++, JavaScript

```c
if (condition) conditional_statement(); // single conditional statement
```

Example if statements in: Python

```python
if condition:
    # conditional block
    conditional_statement()
```

Example if statement for single conditional statement in: Python

```python
if condition: conditional_statement() # single conditional statement
```

Example if statement with a condition spread across multiple lines in: Python

```python
# Multi Line conditions are wrapped in parentheses
if (condition
    and condition):
    # conditional block
    conditional_statement()
```

## Delimitation of `condition` from the `conditional block`

In C, C++, C#, Java, JavaScript:

- The `condition` is surrounded by parentheses (an opening round bracket `(` and closing round bracket `)`).
- The `conditional block` is surrounded by braces (an opening curly bracket `{` and closing curly bracket `}`). These

In the Python programming language:

- The end of the `condition` expression is denoted by a colon `:`
- The `conditional block` is any set of statements indented underneath the `if`


### Why is the colon `:` in Python if statement necessary from a technical standpoint?

The colon is needed for the case where the conditional statement is in the same line as the if condition.

The following case cannot be disambiguated without a semicolon. `if a - b - c` does this mean `if a: - b - c` or `if a - b: -c`

The colon`:` ia not used in Pythons ternary expression `value if condition else alternative`

## C stye if verses Python style for multiple block statements

### C style

- Type `if`
- put the condition between parentheses
- put any conditional block statements between the curly braces.

Advantages

- Relatively easy auto formatting for indentation
- single way to do things

Disadvantages

- requires typing at least one `(` sometimes a `{` typically most editors automate adding the other
- mismatch errors between curly braces
- arguments about brace style

### Python style

- Type `if` and a space then write out the the condition
- If the condition spans multiple lines it needs to be in parentheses
- Place a colon after the condition.
- make any conditional block statements are indented under the if block

Advantages

- forced indentation makes the code consistent

Disadvantages

- possibly more complex explanation since there are multiple options
- have to se

### Python style without colon

```text
if condition
    # block
```

Advantages:

- no need to type colon (requires shift + colon)
- one less thing to explain
- removal of possible error condition
- consistency - all if statements the same
- easier to parse

Disadvantages:

- no single line if
- requires that block always start on the next line
- condition can be spread across multiple lines and automatically derived if types are known in advance and there are restrictions on what can be in statements.

