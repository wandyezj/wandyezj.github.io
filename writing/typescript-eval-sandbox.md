# TypeScript eval sandbox

Generally runtime modifications and use of eval should be avoided when possible.

In some cases runtime eval may be useful.

It is also useful to be able to prevent evaluated code from accessing arbitrary functionality.

This technique can also be used to override built in browser functionality to restrict the set of functions available for use.

```typescript
/*
Eval can be handy
It is also handy to be able to restrict the eval code to only access allowed functionality
*/


// Variable value the evaluated code attempts to access
// evaluated code should not be able to access
const hide = "SECRET";


// Function access the evaluated code attempts to access
// evaluated code should not be able to access
function hideFunction(value: string) {
    console.log(value);
}

function showFunction(value: string) {
    hideFunction(value);
}

function evaluateFunctionCode(functionCode: string) {

    // scoped variable with the same name overrides the value
    const hide = "hidden";
    const hideFunction = (value: string) => {console.log("hidden") }; // do nothing

    // eval to turn code into a function
    // evaled function is bound to this functions context
    const evaluatedFunction:(parameter: string) => void = eval(functionCode);
    return evaluatedFunction;

}

const code = `
(parameter) => {
    console.log("inside");

    // log parameter
    console.log(parameter);

    // attempt to access global secret ("hidden")
    console.log(hide);

    // attempt to access global secret (undefined)
    console.log(window.hide);

    // attempt to access undeclared variable (Uncaught ReferenceError)
    // can use to test what is available or not
    //console.log(variable);

    // attempt to access global ("hidden")
    // Is eval context preserved as part of function eval?
    const code = "(parameter) => { console.log(hide);}";
    const runtimeAccess = eval(code);
    runtimeAccess(parameter);

    console.log("test function access - start");
    // Attempt to access functions ("test")
    showFunction("test");

    // Attempt to access the hidden function (hidden)
    hideFunction("test");
    console.log("test function access - complete");
}
`;

// Evaluate and run the function
console.log("run - start");
const evaluatedFunction = evaluateFunctionCode(code);
evaluatedFunction("value");
console.log("run - complete");

// Output
/*
run - start
inside
value
hidden
undefined
hidden
run-complete
*/
```
