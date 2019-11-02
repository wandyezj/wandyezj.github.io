# TypeScript Dynamically Modify Function

Generally runtime modifications and use of eval should be avoided whenever possible.

In some cases it may be useful.

```typescript
/**
 * dynamically modify a function during runtime
 */
function modifyFunction(initial: () => void) : () => void {

    // the string of the initial function
    const initialFunction = initial.toString();
    console.log("> initial");
    console.log(initialFunction);

    // modify the function string in some way
    const modifiedFunction = initialFunction.replace(/hello world/g, "hi");
    console.log("> modified");
    console.log(modifiedFunction);

    // eval to turn back into a function
    const evaluatedFunction = eval(modifiedFunction);
    return evaluatedFunction;
}

const initial = () => {
    const message: string = 'hello world';
    console.log(message);
};

const modified = modifyFunction(initial);


console.log("> run initial");
initial();

console.log("> run modified");
modified();
```