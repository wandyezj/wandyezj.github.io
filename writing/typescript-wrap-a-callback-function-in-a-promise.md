# TypeScript wrap a callback function in a promise

```typescript


// Original Callback function

/**
 * calls the callback with the value when the function completes.
 * There could be many reasons for a function to take a callback
 * @param arguments 
 */
function example(parameter: number[], callback: (value: string) => void): void {

    // complex logic
    const value = parameter.length.toString();

    // at some point the callback is called with the computed value
    callback(value);
}

/**
 * wraps the callback function to return the value when the callback is complete
 */
async function wrappedExample(parameter: number[]): Promise<string> {
    return new Promise<string>((resolve) => {
        example(parameter, (value: string) => {
            resolve(value);
        })
    });
}

async function test() {
    const initial = [0,1,2];

    // wrapped example
    const calculated = await wrappedExample(initial);

    console.log(calculated);
}

test();

```

## Why

- convenience
- readability

Promises may be easier to use correctly than callbacks.
