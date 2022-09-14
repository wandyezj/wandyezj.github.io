# Safe Script

- Security
    - Origin
    - Access Control
    - Fidelity
- Provability

- Proof of origin, sign script, access to certificate store
- Open access to code so can be manually review the script
    - Code needs to be simple enough to understand and well documented for complex code
    - Eliminating complex language features and interactions can make the code easer to read

- Limit what external libraries can do, requires built in APIs for all permissions.

- Permissions
    - compute resources
        - memory
        - CPU
            - need model of how expensive each command is to run, can be built of system stats over time
        - GPU
    - IO
        - external information from the system
        - Camera
        - environment variables
        - network
        - file system
        - time
    - Specific DLLs to link code (But then give up other properties since DLLs can do anything)


- Script comes with a list of needed permissions
    - permissions can be automatically derived from a scan of the script
- Script can only access what it has been given permission to access

- Prove specific script properties

- want a single .exe file with no additional associated data, except maybe a readme.

- Cross Compilable
    - able to output equivalent code in multiple languages

## Uses

- Enterprise Automation
- Generic Scripting


## Properties

What properties of the programming language or execution environment are necessary to guarantee these properties?

- prove things about specific code paths
    - complexity of the program
    - expected runtime and memory usage for a given size input
- detect all references to external functions so that these can be accurately exposed to the running of the script so they can make a decision?
    - In current languages this has to be done manually which is annoying
- strong types to enable complete static analysis of code


- don't have features beyond the minimum needed. Don't add lots of features. The goal is to write fast provable scripts.


- make it easy to understand
- do not allow redefinition of functions? (or at leas
t built in functions)
- be written quickly with minimal effort
- be easily readable and comprehensible

- camelCase or snake_case ?
    - what is easier to type? to read?
    - what is the appropriate balance between being abe to write and read?

- Do not allow built in functions or constants to be overridden since this makes reading the script more difficult.


- Do not allow assignment outside of an assignment statement

- Anything provable about a script should also be provable about a function in the script leading to function summarization.

- requiring scripts to be open source and reviewable is part of the package, allows reuse of existing scripts within scripts.


- concept of making a claim about a script, either intentionally or derivable via static analysis that is enforceable so that the claim cannot be violated when the script executes.
    - claim may be that the script only reads files, only reads X files, only writes specific files in specific locations
    - claim may be that the script only calls specific DLLs and only calls specific APIs within those dlls.
    - claim may be that the script only accesses specific functions from other scripts
    - claim may be about what a script does with specific data

- want the script execution program and language to allow extension so that even more specific claims may be enforced over time.

- lots of scripts on the internet to do many convenient useful things, but how can we be more certain that these scripts (code other people wrote) only does what is specified and nothing more? How can we be certain that

- making claims needs to be convenient, automatic, and things can be applied later to make more stringent claims.

- convenient if there were something like: [Quick Check](https://en.wikipedia.org/wiki/QuickCheck) fuzzer built in.


- can make claims about where data ends up by tracking input data and output data with tags throughout the program. data derived from a source can be considered derived from that source when the data is output, the source can be checked to make sure that it it ok for data to be taken from one source and placed to another. This is a tricky data flow problem, since data could be written to disk and then re-read, the way to solve this might to be having a temporary location that stores all output until the script is complete and then the output is moved to the final output place, this way it can be tracked what files have what data and reading in the same file results in the data being tagged as having a specific source applied to it. This essentially requires that all data be tagged with the source during runtime, or static analysis needs to be good enough to make sure that input and output can be tracked.

## Differentiate Declaration and Assignment

Is there a way to support Python style `identifier = value` combined declaration and assignment syntax while also supporting scoping rules? One way to do this would be to consider any assignment where the identifier is not shadowing to also be a variable declaration. This is simplified if global variables are banned from being accessed inside of functions. Since the function scope boundary could then be the top level scope. However, referencing variables outside of function scope is quite convenient for things like inline lambda functions since this eases writing callbacks without having to provide a context.

`let identifier` is convenient for explicitly specifying the scope within which the identifier exists and what it shadows. Common cases are for nested if and for where the block boundary is delineated.

Declaration separate from assignment makes it explicit in the code where the identifier is being declared instead of relying on context. Relying on context requires the programmer to do additional thinking about where the variable is declared verses simply looking for let.

## What does constant mean?

Constant means that the identifier cannot be assigned to outside of the declaration.

Constants are still considered variables however and obey all other rules.

Should constant be a completely separate keyword as in JavaScript or be a modifier to a declaration as in C++?

By making a constant an alternative declaration keyword it makes it easier to use and more explicit.

By having `const` be a modifier it allows static analysis to determine if a value is indeed constant, however, it also makes it more annoying to write intent.


## Numbers

Give infinite precision numbers, numbers are rendered when they are referenced.

Irrational numbers are rendered to a fixed point representation.

Numeric types can be use to restrict the range of allowed numeric values.


## Proposed Syntax

Declaration
```typescript
let x

// Optional Type
let y: int

// Optional Type with constraints
// constrains ensure that the value can never fall outside of the constraints at runtime
// i.e. the below handle can never point to a value that is not {0,1,2,3,4,5} if it does it throws during runtime. Initially these constraints must be hard coded in the script
let x: int({minimum: 0, maximum:5})

// maybe?

let z: int<0,4>

// or

let z: int<{minimum: 0, maximum:5}>
```

Assignment
```typescript
// requires previously declared type
x = 5
```

Comes close but doesn't really work...
```typescript
interface c {
  minimum: number;
  maximum: number;
}

interface int<T extends c> {
  constraints: T;
}

let x: int<{minimum:5, maximum: 6}> = 6;
```

Works but clunky

```typescript
interface IntConstraints {
  minimum: number;
  maximum: number;
}

class Int {
  constructor(public constraints: IntConstraints, private current: number) {

  }

  get value() {
    return this.current;
  }

  set value(value: number) {
    Int.checkValue(this.constraints, value);
    this.current = value;
  }

  private static checkValue(constraints: IntConstraints, value: number) {
    const { minimum, maximum } = constraints;
    if (maximum < value || value < minimum) {
      throw new Error(`current [${value}] 
      Out of bounds [${minimum}, ${maximum}]`)
    }
  }

  check() {
    Int.checkValue(this.constraints, this.current);
  }
}

//let x: int<{minimum:5, maximum: 6}> = 6;
let x = new Int({ minimum: 0, maximum: 5 }, 5);
console.log(x.value)

// fails because outside boundary
x.value = 10;

```



Declaration Assignment
```typescript

// x is an integer, integers have a default maximum and minimum bound after which they throw a runtime exception
let x = 5

// throws at runtime (or potentially during static analysis) since y is constrained to a range
let y: int({minimum: 0, maximum: 5}) = 6

// declaration assignment can evaluate an expressio on the right hand side
let z = ( 1 + 2)
```

How does casting work?

base type is different from constraints on that type

constraints are on the handle, if no constraints handle can be anything (of course this makes the program harder to statically analyze but this is convenient)

```typescript
let y: int({minimum: 0, maximum: 5}) = 2

// z acquires y's type (but is that confusing?)
// or would it be better to cast up to an unbounded default type
let z = y

// a has own type, y can be assigned if its value is within bounds
let a: int({minimum: 5, maximum: 10}) = y

```


The goal of specifying a type is to constrain what the handle can point to, and fail if it ever points to something that it isn't allowed to point to. This allows bounding types more specifically.

For example could require that a list not change after a point by freezing or unfreezing it, or could make it so that a list cannot be modified inside a loop, hint to syntax that this behavior should not be allowed. (Modification of a loop that is being iterated through can be an error)

integer operations
+
-
*
/
% - modulo - `mod` - another weird case

Compound assignment with operators, because it is convenient

boolean logic operators
- use python {`and`, `or`, `not`} all short circuit, Do not allow {`||`, `&&`}

comparison operators

x equals y ? <- standard tends to be == even though this is kind of confusing for new people
a = b
a != b <- t this one is kind of weird
a < b
a > b
a <= b
a >= b


```


```


if statements
```text

if expression
    statements
```

`if` is a keyword, the rest of the line is some expression that must evaluate to a boolean (raises an exception if it does not evaluate to a boolean)

any statements `    ` underneeth the if are considered part of the if, this block ends upon the first statement that is not indented


### loops

while loops

```text
while expression
    statements
```


for loops are all bounded to an iteratable expression

```text
for item: type in bounded
    statements
```

provide `break` and `continue` keywords exclusively for loop control, these only impact the current loop (possibly more annoying to break out of a nested loop, this would require a flag boolean or a label on the loop) requires that the underlying type implement an iterable

provide `goto <label name>` and `label <label name>` ? goto isn't great for maintainance, and is kind of breaks safe contructs so maybe not the best


### functions

parameters are a set and must all be named

```text

function name({parameter_a, parameter_b})
    statements
    // return gives back a value from the function
    // by default a function returns nothing and throws and error if the value is accessed for any expression
    // Python returns None
    // JavaScript returns undefined
    // but... why... simply makes it confusing
    return

generator name()
    yield value
```

is there a way to specify that a function does not have side effects? Is IO a form of side effect?

### Dot Semantics

`object.method(...)` can be translated to `method(object, ...). Allowing methods to be defined dynamically requires a way to differentiate between 'built-in' methods part of the class and user defined methods, or methods from a library. This way people are not confused about what is what. i.e. can trust that built in methods do the same thing but not defined methods.


## BNF

http://www.cs.man.ac.uk/~pjj/bnf/bnf.html

http://www.cs.man.ac.uk/~pjj/bnf/c_syntax.bnf

How is BNF parsed?

```bnf
<number> ::= <digit> | <number><digit>
<digit> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<character> ::= %any utf-8 character%
<letter> ::= <letter_uppercase> | <letter_lowercase>
<letter_uppercase> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"
<letter_lowercase> ::= "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"

<newline> ::= "\n"
<optional_whitespace> ::= " " <optional_whitespace> | ""

<token_quote_double> ::= """

(* is there a way to forbid keywords from begin identified as identifiers? want to forbid keywords from being used as identifiers *)
<keyword_if> ::= "if"
<keyword_else> ::= "else"
<keyword_and> ::= "and"
<keyword_or> ::= "or"
<keyword_not> ::= "not"
<keyword_true> ::= "true"
<keyword_false> ::= "false"



<literal> ::= literal_string | literal_number
<literal_number> ::= <number>
<literal_string> ::= <token_quote_double> <character_sequence> <token_quote_double>
<character_sequence> ::= <character> <character_sequence> | <character> | ""

<identifier> ::=

<expression> ::= <expression_call> |
(* call expression with positional arguments, but don't actually want positional arguments want named arguments*)
<expression_call> ::= <identifier_function> "(" <expression_call_argument_list> ")"
<expression_call_argument_list> ::= "" | <expression_call_argument> | <expression_call_argument_list> "," <expression_call_argument>
<expression_call_argument> ::= <literal>



<identifier_character> ::= %[a-z]



```

- boolean expression
- numeric expression