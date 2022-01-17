---
layout: post
title:  "Stronger basic types"
date:   2022-01-17 12:00:00 -0700
tags: software
---

May want the ability to ensure that an integer is within the specified bounds for the course of a program, want to allow upcasting to a boundary that overlaps without issues. Otherwise enforce checking at the bounds. Having to check the bounds manually instead of building those bounds into the type.

Integers and strings

[TypeScript Playgroud code below](https://www.typescriptlang.org/play?&q=501#code/LAKA9AVBoAQTBJAdgYwDYFcDOBLAbgKYwBGA9hkgCZYwBmpATjAIZIw5IAuBA5gQ7HgBtALYccIjCIA0MEcwAeEqQF1BYUB24NazFEWTc+DAMKkkWTg2ZasAHjFJlImAQXcqNJFOL9Z8pUkXNw9qGG8RXwYAPhgAb1g5cSCALiSnIIBuRIDnNNys0ABfUFBIaBA4GBQACwIUAGsCSnYuXn5qtGYsLH9mJposDAYiThrmThgxojxmTCI6tBacGlZWow6AdxwxjhgsAAd6nFocZpJyT3VQdG6aQ3aGB2SpV3cCT3CfPzlFZzfQl5vjF4olEmAwCwUJwMHM0ABPGAHBj4CYERIAYhQ5ks1lsaQexjMFisNi49kczj6gSk0WylRgWOGIy4aQiUXpMBgpQZ2JJDAw0MYAAo+biyZwsAS2kScaTbM8MlJqc5orIUMyPpw2cCAJSghlc3ZYAB0WLlePJMAAvNULRKsJyuVMaiszRqGCzJraPV6nSUQIk+JNZvNhfqEoaYCMYQw2Mb3ZquP6eVysAQQ3MMARhaHszrIvwI4kuYT+CbavUGgA1LM5hPm-kO2R5gi6p1G12mpmerU2mCtlOB8BQQTVOqNF0TF1EX191tyAgZmjTO1N2zXXkThrhg3OxAy8uVxq1sMNsXy8myc9JzjtxIBxLI1HcfacCY4FDjqun7OKgEfGE7I-AEAGfMBMSiva+IHhspjQeSirUmqA51gWUTFlGEJyNgky+CwbBaI8JbsLQMDCgAhAAcsCJorGWDC5nWuqYfunYMKQmzhAQXEAKKeiKAAGc5cDAQgACRxK2RQqOwXikJMaxEcYgm6iRj5Rhe8TpFSvw0i4RT9helqSh2pHkQUrx2Kh8wwAAPnZNnZjA1mUkErFsWMHFcUgPEwPxHGMcJt5iZJ0mySsMDkJMpBkWQFBhBJcRuVIRSyJJlkiDJqnqQ+xQ8thlAEKcTicDg5hRWRvlcZw8JHKAtVHLBjzIAASqwfAAFr8KQAAqpAABIJSMLS2gxdgAAyyAAjBNE10mUkLYiIIgVRerCTJwpAwNgRDdDOa7iloNxyodl6cAxbUdQQ3Ucf1Q1UCN0pwcSR2IVNs3zf2yUvCIaRTXpeSfUU9I8mgGYwAoz0tUg7VIF1PX3cN5y2tVzXGFB65cJdsPXbdfWDcjlCyAArPew7YboOBoDAAC0UUYJKOBFRcCXMAw8KLZDJoLratPTVzCg83W-azQL4CQkLvMHiVOzwvS2FSyLtpUcwVEFZCQwoPoPR060uAs-FVDs5zIBK7ZtoTaA5vOba4s20QdtzTyYqkODJpoKQPDCg75NAA)

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
  #constraints: IntegerConstraints<minimum, maximum>;
  #current: number;
  

  constructor(constraints: IntegerConstraints<minimum, maximum>, current: number) {
    this.#constraints = constraints;
    this.#current = current;
  }

  get value() {
    return this.#current;
  }

  set value(value: number) {
    Integer.checkValue(this.#constraints, value);
    this.#current = value;
  }

/**
 * check that the current value meets the constraints
 */
  check() {
    Integer.checkValue(this.#constraints, this.#current);
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