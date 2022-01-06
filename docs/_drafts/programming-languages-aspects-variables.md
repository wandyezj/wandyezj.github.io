# Programming Languages Aspects Variables

[Scope](https://en.wikipedia.org/wiki/Scope_(computer_science))

[Variable Shadowing](https://en.wikipedia.org/wiki/Variable_shadowing)

[Local Variable](https://en.wikipedia.org/wiki/Local_variable)

[Global Variable](https://en.wikipedia.org/wiki/Global_variable)

Pointer in IDE UI to point to which variable is being referred to?

Scope is inseparable from variable declaration and access.

What are different scope paradigms and what are the advantages and disadvantages of each paradigm?

Looking at examples from specific programming languages:

## Specific Programming Language Implementations

### Python

- Function Scoped
- Use of `global` and `nonlocal` keywords to define what scope a variable refers to.
- allows elimination of variable declaration, inseparable from assignment.
- complex for nested cases have to look for nonlocal / global keywords
- simple for the basic case
- Advantage? prevents the use of global variables by default.
- Advantage? encourages the use of function parameters over variables.
    - disadvantage for construction of lambda functions which are called for methods like sort, map, filter, and reduce, etc... since these functions are called within other functions, this then forces the use of a questionably typed context to be passed in.

- Explanation that each function defines a scope. Variables declared outside of a function are in global scope and can only be accessed using the global keyword.

```python
v = "global"
def f()
    # print(v) # Error: variable v referenced before assignment
    v = "f"
    print(v) # f

print(v) # global
f()
print(v) # global
```

```python
v = "global"
def f()
    global v
    print(v) # global
    v = "f"
    print(v) # f

print(v) # global
f()
print(v) # f
```

```python
v = "global"

def f():
    v = "f"
    print(v) # f
    def f2():
        nonlocal v
        v = "f2"
        print(v) #f2

        def f3():
            nonlocal v
            v = "f3" 
            print(v) #f3

        f3()
        print(v) # f3

    f2()
    print(v) #f

print(v) # global
f()
print(v) # global
```


### C, C++, JavaScript

- Block Scoped
- requires variable declaration from which the scope of a variable is defined.

- Explanation of every set of {} defines a scope, variables are referable only within the set of {} from which they are declared. Function declarations outside of the {} means things are not referable.

```c
#include <stdio.h>

char* v = "global\n";

void f()
{
    v = "f\n";
}

int main(int argc, char **argv) 
{
    printf(v); // global
    f();
    printf(v); // v
}
```

c does not allow functions to be declared inside of functions


JavaScript allows functions to be declared inside of functions and to capture scoped variables from the outer function context. This is particularly convenience for anonymous lambda functions.


## Theoretical

### Everything Global

- simple
- quickly becomes a mess


## Lessons

- Need some scope
- Scope rules require some amount of education
    - people are likely most familiar with the language scope rules that they use most frequently.
- Need a way to specify what scope a variable is relevant in or from what scope a variable is captured
- Tighter scope for variables allows for more optimization and potentially better static analysis

What is both an intuitive and powerful scope rule that avoids mistakes

