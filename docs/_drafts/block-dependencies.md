# Block Dependencies

Consider a program as a series of blocks executed in sequence.

Each block

- consists of lines of TypeScript code.
- is scoped to have its own namespace
- can take parameters that are bound to the TypeScript code before execution.
- can read and write to global variables
- blocks can contain other blocks

## UX

Arbitrarily add and remove blocks in any order from the program.

- remove any block from anywhere
- insert any block anywhere
- validate block input types
- execute blocks in sequence
- validate the sequence of blocks. i.e. a block can't take in a variable before it is declared / set.

### Example UX

A sequence of blocks.

Blocks have:

- descriptions - what does this block do?
- parameters - what values does this block need?

```text
 -------------------- 
|                    |
|    description     |
|                    |
 -------------------- 
 -------------------- 
| declare variable   |
| <name> <type>      |
|                    |
 -------------------- 
 -------------------- 
|  set variable      |
|  <name> to <value> |
|                    |
 -------------------- 
 -------------------- 
|   Do thing         |
|   with <value>     |
|                    |
 -------------------- 
```

## Dependency Expression

Blocks might want to express a dependency on a previous block.


## Block Code

### Create Global Variables

```typescript
let name: Type | undefined;
```

Parameterize name and the type.

```txt
let ${name} = ${type} | undefined;
```

### Set Global Variables


```typescript
{
    name = value;
}
```

Parameterize name and value.

```text
{
    ${name} = ${value};
}
```


### Call APIs

In this case an API to set a value

```typescript
{
    name.setValue(value);
}
```

Parameterize name and value.

```text
{
    ${name}.setValue(${value});
}
```

## Describing



