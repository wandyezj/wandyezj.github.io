# Software Extensibility

Extending the capability of software.

## Definitions

Host

- The piece of software that can be extended.

Application

- The piece of software that can be added to the host.

API

- Application Programming Interface, the set of functions that the Host and application use to communicate.

## APIs

All individual APIs should be semantically versioned.

APIs should use the same paths that exist to carry out existing functionality.

## Engine

If APIs are promise based should they still execute in the order that they are called?

### Verification

An application should be written that exercises full capabilities of all APIs the host supports to ensure that no regressions in the API layer occur.

## Permissions

Each API and the version of the API that an application uses should be listed in the manifest.

Before an application is added to the host the use can view the list of permissions being granted.

Ideally this list should be automatically generated from the application source code.

The host should only enable use of APIs by the application that are listed in the manifest.

The host can deny an application if it does not support all APIs that an application requires.

The host should have an API that lists all APIs that are supported.

## Host Verification

It's possible that an application is loaded by a host that is 'evil'.

The application may like a way to verify that the host is one that can be trusted.
Similarly the host may like a way to verify that the application can be trusted.

Is it possible to verify that a host or an application can be trusted?


## Possible Website Implementation

Websites could be extended with additional functionality.

Use an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) to host the extension code. Communicate across the iframe boundary to the host using messaging. The iframe can have the sandbox property set to lock down additional permissions.

The iframe can also set a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to restrict web access.

Use browser [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store which extensions were added.

Messages between the Host and client:

Each operation is given a unique id.

Each operation sends the following information to the Host:

- operation id
- operation name
- arguments as key value pairs

Each operation is given a result:

- success or error message
- optional return value

Can results of operations be used to naturally build up a dependency graph of operations? This can then be used to auto queue operations in the right order until a value is finally needed.

This could be done on the client side by having 'reference' values that reference the return of the another call. This would required the host to build the dependency graph between operations (although shouldn't in a sequential execution the operations already be in executable order?, The nice part about JavaScript is that operations can be guaranteed to be serial).

For example the following two operations could be completed in one round of calls, if the call to two could immediately consume the value of one on the host side.

```typescript
interface o {
    async one(): string;
    async two(value: string | Promise<string>): string;
}

async function main() {
    const value = o.one();
    const final = await o.two(value);
    console.log(final);
}
```


Messages between the Host and application:

```typescript

/**
 * Represents a call from the application to the host
 */
interface Call {
    /**
     * id to uniquely identify the call
     */
    id: string;

    /**
     * name of the API to call
     */
    name: string;

    /**
     * version of the API to call
     */
    version: string; // major.minor.revision
    arguments: Arguments;
}

interface Arguments {
    [string: key]: any; // link type to object
}

/**
 * Represents a Response to a call
 */
interface Response {
    /**
     * id uniquely matches the response to the call
     */
    id: string;

    /**
     * Error code for the API. can be translated to an error message on the client side. Would it be better for this to be a string?
     */
    error: number;

    /**
     * return value from the call
     */
    value?: any;
}

```


Sessions there needs to be a session in which a sequence of calls take place, that way the main webpage runtime knows where to redirect calls.

Similarly this way the main webpage runtime can coordinate calls to make sure they do not interfere with each other.



Streaming APIs in some cases the data set may be too large to parse at once. Example: loading an gigabyte file into memory before processing verses only loading the single line at a time that needs to be processed.

A possible approach to streaming may be [JavaScript Iterators or Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

Issues with streaming include:

- How is the state streamed from the host to the application?
    - Best effort?
    - If something on the host changes is that reflected in the stream or does it capture a single instance? Would the difference be visible to the user?
    - Changes are not transactional and thus it's possible for an inconsistent state to emerge between the client and the host.


```typescript

/**
 * Generator
 * Can return items one at a time and can wait for new data to appear as needed
 */
function* streamOfPromises() {
    // It's possible initial data was populated
    yield "one";

    // Can wait for bulk data to appear
    // A small set of calls to get data may be slow.
    // Calls that merely iterate through fetched data will be faster.
    yield new Promise((resolve) => resolve("two"));

    // Simulated fast call
    yield "three";
}

async function main() {
    // Cycle through all values in a streamed way awaiting each value
    for (const item of streamOfPromises()) {
        console.log(await item);
    };
}

main();

```


Class based implementation of the stream which could allow a class to maintain an internally consistent state if required.

```typescript
function* streamOfPromises() {
    yield "one";
    const value: Promise<string> = new Promise((resolve) => resolve("two"));
    yield value;
    yield "three";
}

class IteratorClass<T> implements Iterator<T> {
    public constructor(private promiseStream: Generator<T>) {
    }

    /**
     * Implementation of Iterator, which simply cycles through generator instance
     */
    public next(): IteratorResult<T> {
        const value = this.promiseStream.next();
        return value;
    }
}

class IterableClass implements Iterable<string |Promise<string>> {

    /**
     * Implemenation of iterable
     * enables `for of`
     */
    public [Symbol.iterator]() {
        // The generator could capture this instance so that values only have to be streamed once
        const generator = streamOfPromises();
        return new IteratorClass<string |Promise<string>>(generator);
    }
}

async function main() {
    // Instantiates the iterable
    const items = new IterableClass();

    // Cycle through all values in a streamed way awaiting
    console.log("First Run");
    for (const item of items) {
        console.log(" " + await item);
    };

    console.log("Second Run");
    for (const item of items) {
        console.log(" " + await item);
    };
}

main();

```

