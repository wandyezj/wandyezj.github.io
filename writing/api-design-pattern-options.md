# API Design Pattern Options

The Options design pattern is used when a function or method has additional options.

Options allows the method to extend its functionality

Drawbacks:

- options can be hard to discover `ctrl + space` in Visual Studio Code.

```typescript

// Keeping a consistent postfix of Options make it easy for consumers to know that the object is an options parameter
interface ExampleOptions {
    // all options should be optional
    parameter?:string;
}

// options should be optional
declare function example(required: string, options?:ExampleOptions);


// Its convenient to have the options inline since it allows the parameter choices to be seen from intellisense
// in the case of many parameters it gets complicated since it can clutter the function signature
declare function example(required: string, options?:{parameter?:string})

```