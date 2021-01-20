# API Design Position Verses Named Parameters

Topic: Positional Parameters verses parameter object. Example: f(a, b) verses f({​​a,b}​​)

expand-ability

how to communicate what is required and what is optional?

positional good for things that will always be required

different functions verses a singe function with a large number of overloads

positional works until behavior needs to change

f{​​a,b}​​ or f{​​a:value, b:value2}​​

object is overkill for many scenarios

named parameters is same as field of the object tedious to call function by writing out x: each time

also tedious if have to pass all values individually to multiple functions


The position is irrelevant the name of the parameter is what matters

multiple functions -> well which one do I use
What happens when fields arise in 


When you can't make the breaking change then what?


How frequently do we add new parameters?


f(positional, options?)





# Adding additional parameters to published APIs

## Analysis of Compatibility consequences

Conclusion, any change to a functions signature is a potential breaking change.

### adding additional required parameters

BREAKING CHANGE


```typescript
// Original
declare function f();
```

```typescript
// Modified
declare function f(parameter: string);
```


TypeScript signatures are incompatible

Should be avoided.

### adding additional optional parameters to the end of a function

BREAKING CHANGE

```typescript
// Original
declare function f();
```

```typescript
// Modified
declare function f(parameter?: string);
```



function.prototype.length will now report different results

```typescript
function a() {}
function b(p?: string) {}

// Change in the number of arguments breaks compatibility for the length property
console.log(a.length); // 0
console.log(b.length); // 1
```

previous arguments passed may result in different behavior

```typescript
// Original
function a(one: string) {
    console.log(one)
}

// Original extend with optional parameter for additional functionality
function b(one: string, two?: string) {
    let s = one;

    if (two) {
        s += two;    
    }

    console.log(s);
}


const values = ["one", "two"];

// note: Typescript flags this error but it can still be run and in pure JavaScript this would not be easily caught.
// note this works the same for even a function with zero initial parameters
a(...values); // one
b(...values); // onetwo
```

### Parameter addition to last options parameter

BREAKING CHANGE

```typescript

// Original
interface OptionsA {
    a?: string,
}

function a(options?:OptionsA) {
    if (options) {
        const {a} = options;
        if (a) {
            console.log(a)
        }
    }  
}

// Original extended with additonal option
interface OptionsB {
    a?: string;
    b?: string;
}

function b(options?:OptionsB) {
        if (options) {
        const {a,b} = options;
        if (a) {
            let s = a;
            
            // new behavior to handle b option
            if (b) {
                s += b
            }
            console.log(s)
        }
    }  
}

const p = {a: 'a', b:'b'}

// We can see that an adjustment to a's parameters can result in different behavior if b is called instead.
// TypeScript does not catch this error, if a's definition is swapped with b's definition.
a(p); // a
b(p); // ab

```

## Existing Practice

As of 2021-01-01 API design allows functions signatures to add new optional parameters to the end of the function definition and we allow the extension of existing options objects. Allowing these API modifications can lead to compatibility issues in existing code that calls these APIs.

## Questions

Should we continue recommending the addition of optional parameters or updates to options objects on published APIs?

Should we allow the addition optional parameters or updates to options objects on published APIs?

If we allow the modification of function signatures should we do something to mitigate potential compatibility issues?

## Possible Solutions

- Avoid any changes to function signatures after they are published.
- Document best practices and that compatibility is not guaranteed for some calling practices.
- The Synchronous API could add a linter rule to check for incompatible uses.

Semantic Versioning and types. Semantic Versioning

Best Practices for Office API consumers

- Always call APIs with __only__ the specified options or inline options. Always a strict options type.
- Do __NOT__ rely on `function.prototype.length` for APIs. Or similar for classes.
- Always call APIs with specific parameters, do not use apply or spread.










