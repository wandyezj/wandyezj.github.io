# TypeScript Sleep

```typescript
/**
 * delay number of milliseconds before promise is resolved.
 */
async function sleep(milliseconds: number): Promise<void>  {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, milliseconds)
    });
}


async function main() {

    const fiveSeconds = 5 * 1000; 

    console.log("start");

    const start = Date.now();
    await sleep(fiveSeconds);
    const end = Date.now();

    console.log("end");
    const elapsed = end - start;
    console.log(`elapsed: ${elapsed} ms`)
}

main()

```


## Output

```text
start
end
elapsed: 5001 ms
```
