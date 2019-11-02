# TypeScript await Queue

Register callbacks that are called when an await is hit.

Registered callbacks are tied to promises that resolve when the callbacks are run.


```typescript
// typescript await queue

// on an await trigger the  function

type callback = () => void;

const queue: callback[] = []

function trigger() {
    console.log("trigger");

    // flush queue
    // call all in order registered
    let call = queue.shift();
    while (call) {
        call();
        call = queue.shift();
    }
}

/**
 * add callback to trigger queue
 * the first encountered await flushes the trigger queue
 */
function addToQueue(call: callback): void {
    if (queue.length === 0) {
        setTimeout(trigger, 0);
    }
    queue.push(call);
}

function register(message: string): Promise<void> {
    return new Promise<void>(resolve => {
        addToQueue(() => {
            // resolve once the message is logged
            console.log(message);
            resolve();
        });
    })
}

async function test() {
    console.log("test - start");
    ["1", "2", "3"].forEach((i) => {
        console.log(`before ${i}`);
        register(`queue ${i}`);
    });
    console.log("await");
    await register("queue await");

    console.log("await");
    await register("queue await single");


    console.log("test - end");
}

test();



```

## Output

```text
test - start
before 1
before 2
before 3
await
trigger
queue 1
queue 2
queue 3
queue await
await
trigger
queue await single
test - end
```
