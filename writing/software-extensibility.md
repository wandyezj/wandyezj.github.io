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





