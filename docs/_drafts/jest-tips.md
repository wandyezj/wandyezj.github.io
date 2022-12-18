# Jest Tips


Jest updated to only allow done or async. This is a patch to allow both.

```ts
/**
 * __Only__ use to patch existing jest unit tests that use an async callback and done.
 * Generally, jest unit tests should avoid using `done`.
 * returns a callback that returns a promise that resolved when the callback parameter resolves the done.
 * @param callback 
 * @returns 
 */
export function donePromise(callback: (done: ()=> void) => void): () => Promise<void> {
    return () => new Promise((resolve) => {
        callback(resolve);
    });
} 

```