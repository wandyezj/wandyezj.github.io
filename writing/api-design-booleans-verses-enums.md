# API Design Booleans verses Enums

Questions around what makes the code most readable and maintainable?

- Order of parameters changes?
- Need to add another option?
- Viewing code

## Boolean Example

```typescript

declare function f(a: boolean, b: boolean, c: boolean): void;

f(true, false, true);

const a = true;
const b = false;
const c = true;
f(a, b, c)


```


## Enum example

```typescript
enum A {
  One,
  Two
}

enum B {
  Enable,
  Disable
}

enum C {
  On,
  Off
}

declare function f(a: A:, b: B, c: C);

f(A.One, B.Disable, C.On);

```

## Boolean Object Example

```typescript


declare function f(parameters: {
    a: boolean;
    b: boolean;
    c: boolean;
    });

f({
    a: true,
    b: false,
    c: true
});


```

- Allows reader of the function call to easily understand what is being set to true and what is being set to false