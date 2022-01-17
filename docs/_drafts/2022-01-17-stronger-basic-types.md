---
layout: post
title:  "Stronger basic types"
date:   2022-01-17 12:00:00 -0700
tags: software
---

May want the ability to ensure that an integer is within the specified bounds for the course of a program, want to allow upcasting to a boundary that overlaps without issues. Otherwise enforce checking at the bounds. Having to check the bounds manually instead of building those bounds into the type.

Integers and strings

[TypeScript Playgroud code below](https://www.typescriptlang.org/play?&q=501#code/LAKA9AVBoAQTBJAdgYwDYFcDOBLAbgKYwBGA9hkgCZYwBmpATjAIZIw5IAuBA5gQ7HgBtALYccIjCIA0MEcwAeEqQF1BYUB24NazFEWTc+DAMKkkWTg2ZasAHjFJlImAQXcqNJFOL9Z8pUkXNw9qGG8RXwYAPhgAb1g5cSCALiSnIIBuRIDnNNys0ABfUFBIaBA4GBQACwIUAGsCSnYuXn5qtGYsLH9mJposDAYiThrmThgxojxmTCI6tBacGlZWow6AdxwxjhgsAAd6nFocZpJyT3VQdG6aQ3aGB2SpV3cCT3CfPzlFZzfQl5vjF4olEmAwCwUJwMHM0ABPGAHBj4CYERIAYhQwxGXDSESi2RAiRQ5ksDAw0MYAAoDhhiGgcChqmSrDYuFg0g9jGYLGzbM8MlI+oEpNFZNiGLjOPjgQBKUGVGDK3ZYAB0WJxH0mAF5qlquETlSViUq+JNZvNqQqEkrlSMYQw2KqNZLpUaYCbElgCBa5hgCNTLQHZZF+DbEsrufw1bV6g0AGr+wMu0l86y2WTBghyj0qmorV0G3UwbMer3gKCCap1RpTcaTab6qXa0vJuQEX00Jtp8nszhYa5KuONa2K5VRtrGWO1xPJ6mp1kZjmyF2altcXOJCvK5Go7j7TgTJk1+NJ+aCgEfMIEn4BK+fW8xam9-kcrlT-i8vsCxwi8VtvMoZRBGdowBCcjYJMvgsGwWiPJG7C0DA1IAIQAHLAmqKzRgwQbJnKoEThOYwMKQmzhAQFEAKJSjSAAGbqtkIAAkcTZkUKjsF4pCTGs8HGPRcqITuE6vvE6TOCK-xFDAeqvsuA55khKEFK8diAQGMAAD7aZpRAaY4zhEcR9ZkRRSBUTAtFkXhjHFjArHscmnHcTA5CTKQyFkBQYROUZQRFLIbFqSInFCSJ27FKU4CQpQBCnE4nA4OY7nIZZFGcPCRygFlRyIJ+DDIAASqwfAAFr8KQAAqpAABK+SMLR6rhdgAAyyAAjG1bXRESEGkiIIipa+rCNqQMDYEQ3T1kQCn9jcrIsum-a4SVZUEJVZG1Q1VBNR+GymEu-b2B13W9XJ8QBVIaQdb8ooiCk51FESMVoL6MAKAdjzrUgFVVTtjXnHqGUFYdL7HVoa1IKVf2bQD9VA5QsgAKxbqaEG6DgaAwAAtO5GADjg8UXL5zAMPCZSQgoarZpduOdVTn20+2erdYzsXM3TLVIIlOzwv11Ms-Ml3ocw6ExRBQwoPoPR460uAkz5VDk5TIA09zMBtaAGuszAHO6yLbM9TFvakO9apoKQPDUobAbo0AA)

```typescript
/**
 * Inclusive bounds for an integer
 * [minimum, maximum]
 */
interface IntegerConstraints<minimum extends number, maximum extends number> {
  minimum: minimum;
  maximum: maximum;
}

/**
 * checked integer class, makes sure that the value held is an integer within specified bounds
 */
class Integer<minimum extends number, maximum extends number> {
  
  // actually private
  #current: number;

  constructor(public constraints: IntegerConstraints<minimum, maximum>, current: number) {
    this.#current = current;
  }

  get value() {
    return this.#current;
  }

  set value(value: number) {
    Integer.checkValue(this.constraints, value);
    this.#current = value;
  }

/**
 * check that the current value meets the constraints
 */
  check() {
    Integer.checkValue(this.constraints, this.#current);
  }

  private static checkValue<min extends number, max extends number>(constraints: IntegerConstraints<min, max>, value: number) {
    // must be an integer
    if (!Number.isInteger(value)) {
      throw new Error(`current [${value}] is not an integer`)
    }

    const { minimum, maximum } = constraints;
    if (maximum < value || value < minimum) {
      throw new Error(`current [${value}] is out of bounds [${minimum}, ${maximum}]`)
    }
  }
}

// definition of new type
type IntegerInRangeZeroToHundred = Integer<0, 100>;
// common constant to use as the constraint
const constraintIntegerInRangeZeroToHundred: IntegerConstraints<0,100> = {minimum: 0, maximum:100};


let x: IntegerInRangeZeroToHundred = new Integer(constraintIntegerInRangeZeroToHundred, 5);

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