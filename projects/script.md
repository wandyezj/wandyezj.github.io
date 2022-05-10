# Script

Attempt to create a simple scripting language.

## Comments

Comments start with hash `#`

comments are only valid at the first character in a line, everything up to the newline is ignored.

```text
# comment
```

## Variables

All identifiers have a type. An identifier without a defined type is considered to be an unknown type which can contain anything.

If an identifier is declared with a type, then that identifier can only be assigned expressions that evaluate to that type.

identifiers must follow certain naming rules

```text

# declaration
identifier

# assignment
# declares identifier if identifier is not already in scope
identifier = expression

# declaration
identifier: type

# declaration and assignment
identifier: type = expression

```

IntelliSense places an icon next to variables that are being referenced from a higher level scope.

variables throw if accessed for a value without being assigned to, this also shows up a syntax error.

Is 

## Scope

scope is defined by indentation

indentation is in units of four spaces. Any other indentation level is considered a syntax error.

Scopes must be started by a statement that contains its own scope

All identifiers in scopes higher level are accessible within lower level scopes


## Types

Type modifiers

const - variable can only be assigned to during declaration

Built in types (types that do not need to be imported)

- number
    - numbers can be scoped to specific ranges of values, assignment of a number outside of the range results in both syntax and runtime errors
- boolean
- string
    - only supports utf-8
    - strings can be scoped with regex, assignment to the value outside of the range results in both syntax and runtime errors.
- array
- map
- structure
- functions
- classes

## Control Flow

### Selection

#### if

```text

if expression
    statements

if expression
    statements
else
    statements

if expression
else if expression
else
    statements

```

#### switch

Fancy way of writing an if else tree evaluating on one value

https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements

select only evaluates one branch

also support case guards

```text

select expression
    value
        statements
    value_other
        statements

    value1
    value2
        # executes if matches value1 or value2
        statements

    # special keyword if no others match
    default

```

### Repetition

```text

while expression
    statements

```


Go through an iterator

```text

for identifier in iterable
    statements

```



specialized control flow

```text
# do next iteration of containing loop
continue

# exit containing loop
break
```

Sometimes you want to directly move to some specific outer loop or break out of a specific loop

What if could repeat the break and continue a few times to target that loop

```text

while expression
    while expression
        # continue on next iteration of outer loop
        continue continue

        # break inner loop and outer loop
        break break

```

What if could specify which loop to break with optional loop label, similar to [JavaScript label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

```text
label while expression
    label_other while expression
        # break out of the label loop
        break label

        # continue the label other loop on next iteration
        continue label_other

```

## boolean expressions

Use python text instead of weird symbols `and` `or` `not`

## functions

## Generator

actually needs `yield` and `return`

Generators should simply return an iterator

{value T, done boolean}

## Import

All libraries are built in

how to specify specific library versions as part of the script?

provide a hash of the library?

```text
import library

```


## Threading Support