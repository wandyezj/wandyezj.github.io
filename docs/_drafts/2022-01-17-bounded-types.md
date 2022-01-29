---
layout: post
title:  "bounded types for numbers and strings"
date:   2022-01-17 12:00:00 -0700
tags: software
---

I have often found myself wishing for a way to more clearly define the range of values assignable to a `number` or a `string`. Specifically, it would be convenient to be able to specify the range of acceptable values for numbers and strings in a functions argument declared types instead of having to rely on documentation and writing custom error checking conditions. Ideally these type checks could be done as part of static analysis and IntelliSense could show where arguments need to be checked.

For example an integer might need to be mapped to a specific compiler defined type. It would be convenient to be able to specify the range of possible values instead of attempting to figure out how many bytes should be allocated. The compiler can figure out the appropriate type to represent something based on the specified range of values. Such types could also be used to easily check inputs



- conversion function to cast between types, it would be awesome if the compiler could run this at static time, without that it runs at run time.
- is valid to check before assignment in an if statement

but this type system can't run at static checking time.

 restricted to a defined range of values based on its underlying type in some programming languages, and it would 


Bounded Types for numbers and strings

Strings
- phone number in a specific form
- id in specific form

Number


May want the ability to ensure that an integer is within the specified bounds for the course of a program, want to allow upcasting to a boundary that overlaps without issues. Otherwise enforce checking at the bounds. Having to check the bounds manually instead of building those bounds into the type.

Integers and strings

## Bounded Integer

[TypeScript Playground Bounded Integer](https://www.typescriptlang.org/play?&q=501#code/LAKA9AVBoAQTBJAdgYwDYFcDOBLAbgKYwBGA9hkgCZYwBmpATjAIZIw5IAuBA5gQ7HgBtALYccIjCIA0MEcwAeEqQF1BYUB24NazFEQBC5KgUoBlTgw48AwqSRZLzLQB4GvAgpifuVGo6skHgA+GABvWBh3PgUALiiPBQBuUABfUFAwMBgUe0comABeGAAiZhKU8Gzch04YLHiLQNs8py0sFzKS0OKw6M94rvSQTKhBHIALAhQAa1N2Lg8mdGYsLFl5Of8MdxhOCeY6-aI8ZkwiKbRKdhpWBe4+JgB3HH2OeoAHaZxaHHmyCjUdSgFZrGBGQGmJrWNyJbwKXzUeqWayhCIgGAwSJZFgoTgYM5oACeMA+VlO3EiAGIUDt3Fx4gFrJVMTTWgxnAyYAAlXgAUQUH0qkRqAQweMYAApRW0uA1wcZKFCUUE7LUOa5+gpgrJaQx6ZxGSqeABKcKRTE4lBTWYJGIWmA4pCkOpfHTTOpYCbkK5yZhzeo7IgcdAYJX+TjMBh1VjXAhUBZ7KZ2zzI5oOp0EeacUh+gNYIM5dmcupam4wU5oHCUB1vLAAOjZ6pLRRgSAITx5-MFkoABgA9AAkYRlGrl9a1qQAOoPeybhRjMUmcA2aXT43VinqDSyYMNInw6pWMARJWb0UuEviGGw643txvd-vF1gCEezifJceCEbmueHRCJjmMa9bWtMMwAGofqed5NgEJayN+861hMK73uuXCtt+T4ZOAYwYvAYG2vshxJkQD6Yd+chZpwNDHEWzbtMCi5ETMZ7moumKAUqwHNKBNqQdBkqwaOCHLquFGcMhi7PpiZL4IcRCOIcOAoJM4FQec0rFlo8S8jwAofIh0G-tYJrxHgpDVhxl44pI+TyJw1pkSmCgOj8MCSgAhKJWj1twjhftBJr-pxS77AwpCdu2nZ8vqUq9lRQjDt+qQqDAlCkAQNDOnUjnOVq8TDr5XD1lg5AMPoqRzg6wyYsMz44kqvxIK8OD2DApC0G2HZ7ESXygJw-VEGq8FaNxyrNAACqQuCcPgBDIA8-CthNvHWKNsqcJ0QgAAwALQAJwqHtR0qBA3SVENXwKpC61BDNc0LUtSyrYqk0wiUp3Hd952XZk1SkCIIgdTKrBHLm2BEKsLklZwIKtAxY1cGt0JBAgWCPW1hAvY88SbWOnCo8aWPzTjiyPK2fSJIMv2-RdqQLqAaBvjAcS3UBaM8KTz0UytxQxRzPFc9pjEo+9908BjPPk8tDCyCUABsJTSQDdDOGgMD7Z1GC0dWRAAlQUZEmrCj1lRxQlPtACMFSm+b0Gtl0lQ4mbFulHbVRsw75xO1OSAlLhOIFig+hgtrHC4EqJCKsboBu47lu7YHIAJ77lu2-HPsnk71u7cnuGiqQLP1mgpA8JKacntJQA)

```typescript

/**
 * Inclusive bounds for an integer
 * [minimum, maximum]
 */
interface BoundedIntegerConstraints<minimum extends number, maximum extends number> {
  minimum: minimum;
  maximum: maximum;
}

/**
 * checked integer class, makes sure that the value held is an integer within specified bounds
 */
class BoundedInteger<minimum extends number, maximum extends number> {
  
  // actually private
  #constraint: BoundedIntegerConstraints<minimum, maximum>;
  #current: number;
  

  constructor(constraint: BoundedIntegerConstraints<minimum, maximum>, current: number) {
    this.#constraint = constraint;
    this.#current = current;
  }

  get value() {
    return this.#current;
  }

  set value(value: number) {
    BoundedInteger.checkValue(this.#constraint, value);
    this.#current = value;
  }

/**
 * check that the current value meets the constraints
 */
  check() {
    BoundedInteger.checkValue(this.#constraint, this.#current);
  }

  private static checkValue<min extends number, max extends number>(constraint: BoundedIntegerConstraints<min, max>, value: number) {
    // must be an integer
    if (!Number.isInteger(value)) {
      throw new Error(`current [${value}] is not an integer`)
    }

    const { minimum, maximum } = constraint;
    if (maximum < value || value < minimum) {
      throw new Error(`current [${value}] is out of bounds [${minimum}, ${maximum}]`)
    }
  }
}

// definition of new type
type BoundedIntegerInRangeZeroToHundred = BoundedInteger<0, 100>;
// common constant to use as the constraint
const constraintBoundedIntegerInRangeZeroToHundred: BoundedIntegerConstraints<0,100> = {minimum: 0, maximum:100};


let x: BoundedIntegerInRangeZeroToHundred = new BoundedInteger(constraintBoundedIntegerInRangeZeroToHundred, 5);

// fail - outside boundary
// x.value = -1
// x.value = 101
// x.value = Infinity;
// x.value = NaN

// success - inside boundary
x.value = 0
x.value = 1
x.value = 100

console.log(x.value);

```

## Bounded String

[TypeScript Playground Bounded String](https://www.typescriptlang.org/play?&q=501#code/LAKA9AVBoAQTBJAdgYwDYFcDOBLAbgKYwBGA9hkgCZYwBmpATjAIZIw5IAuBA5gQ7HgBtALYccIjCIA0MEcwAeEqQF1BYUB24NazFEQBC5KgUoBlTgw48AwqSRZLzLQB4GvAgpifuVGo6skHgA+GABvWBh3PgUALiiPBQBuUABfUFAwMBgUe0comABeGAAiZhKU8Gzch04YLHiLQNs8py0sFzKS0OKw6M94rvSQTKhBHIALAhQAa1N2Lg8mdGYsLFl5Of8MdxhOCeY6-aI8ZkwiKbRKdhpWBe4+JgB3HH2OeoAHaZxaHHmyCjUdSgFZrGBGQGmJrWNyJbwKXzUeqWayhCIgGAwSJZFgoTgYM5oACeMA+VlO3EiAGIUDt3Fx4gFrJVMTTWgxnAyYAAlXgAUQUH0qkRqAQweMYAApRW0uA1wcZKFCUUE7LUOa5+gpgrJaQx6ZxGSqeABKcKRTE4lBTWYJGIWmA4pCkOpfHTTOpYCbkK5yZhzeo7IgcdAYJX+TjMBh1VjXAhUBZ7KZ2zzI5oOp0EeacUh+gNYIM5dmcupam4wU5oHCUB1vLAAOjZ6pLRRgSAITx5-MFkoABgA9AAkYRlGrl9a1qQAOoPeybhRjMUmcA2aXT43VinqDSyYMNInw6pWMARJWb0UuEviGGw643txvd-vF1gCEezifJceCEbmueHRCJjmMa9bWtMMwAGofqed5NgEJayN+861hMK73uuXCtt+T4ZOAYwYvAYG2vshxJkQD6Yd+chZpwNDHEWzbtMCi5ETMZ7moumKAUqwHNKBNqQdBkqwaOCHLquFGcMhi7PpiZL4IcRCOIcOAoJM4FQec0rFlo8S8jwAofIh0G-tYJrxHgpDVhxl44pI+TyJw1pkSmCgOj8MCSgAhKJWj1twjhftBJr-pxS77AwpCdu2nZ8vqUq9lRQjDt+qQqDAlCkAQNDOnUjnOVq8TDr5XD1lg5AMPoqRzg6wyYsMz44kqvxIK8OD2DApC0G2HZ7ESXygJw-VEGq8FaNxyrNAACqQuCcPgBDIA8-CthNvHWKNsqcJ0QgAAwALQAJwqHtR0qBA3SVENXwKpC61BDNc0LUtSyrYqk0wiUp3Hd952XZk1SkCIIgdTKrBHLm2BEKsLklZwIKtAxY1cGt0JBAgWCPW1hAvY88SbWOnCo8aWPzTjiyPK2fSJIMv2-RdqQLqAaBvjAcS3UBaM8KTz0UytxQxRzPFc9pjEo+9908BjPPk8tDCyCUABsJTSQDdDOGgMD7Z1GC0dWRAAlQUZEmrCj1lRxQlPtACMFSm+b0Gtl0lQ4mbFulHbVRsw75xO1OSAlLhOIFig+hgtrHC4EqJCKsboBu47lu7YHIAJ77lu2-HPsnk71u7cnuGiqQLP1mgpA8JKacntJQA)

```typescript

/**
 * Inclusive bounds for an integer
 * [minimum, maximum]
 */
interface BoundedStringConstraint<regex extends string> {
  regex: regex;
}

// const r = "a";
// const s: StringConstraints<"a"> = {regex: "a"}

/**
 * checked integer class, makes sure that the value held is an integer within specified bounds
 */
class BoundedString<regex extends string> {
  
  // actually private
  #current: string;
  #constraint: RegExp;

  constructor(constraints: BoundedStringConstraint<regex>, current: string) {
    // check regex
    // not perfect should make sure includes start and end in the regex string
    // need to make sure constraint regex is valid
    this.#constraint = new RegExp(`^${constraints.regex}\$`);

    this.#current = current;
  }

  get value() {
    return this.#current;
  }

  set value(value: string) {
    BoundedString.checkValue(this.#constraint, value);
    this.#current = value;
  }

/**
 * check that the current value meets the constraints
 */
  check() {
    BoundedString.checkValue(this.#constraint, this.#current);
  }

  private static checkValue(constraint: RegExp, value: string): void {
    // must match the regex
    if (!constraint.test(value)) {
      throw new Error(`value [${value}] does not match regex: ${constraint.source}`)
    }
  }
}

// definition of new type
type ConstraintBoundedStringPositiveInteger = BoundedStringConstraint<"[0-9][0-9]*">;
type BoundedStringPositiveInteger = BoundedString<"[0-9][0-9]*">;
// common constant to use as the constraint
const constraintBoundedStringIsPositiveInteger: ConstraintBoundedStringPositiveInteger = {regex: "[0-9][0-9]*"};


let x: BoundedStringPositiveInteger = new BoundedString(constraintBoundedStringIsPositiveInteger, "6");

// fail - outside boundary
// x.value = "-1";
// x.value = "a";
// x.value = "";
// x.value = "\n"

// success - inside boundary
x.value = "0"
x.value = "1"
x.value = "100"

console.log(x.value);

```