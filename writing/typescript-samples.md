# TypeScript Samples

```typescript

// example of the value of bind
class Test {

  constructor(private va: string = "A", private vb: string = "B") {}

  a =  () => {
    console.log(this.va);
  }

  b() {
    console.log(this.vb)
  }

}

const t= new Test();

t.a() // "A"
t.b() // "B"

function c (f:()=> void) {
  f();
}
console.log("callback")
c(t.a); // "A"
c(t.b); // Error: Cannot read property 'vb' of undefined 


```