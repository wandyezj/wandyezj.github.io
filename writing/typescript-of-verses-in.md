# TypeScript for of verses for in

```typescript
const l = [1,2,3];
console.log(l);

console.log("   of")
// 1 2 3
for (let i of l) {
    console.log(i);
}

console.log("   in")
// "1","2","3"
for (let i in l) {
    console.log(i);
}


const o =  {
    a:1,
    b:2,
    c:3
}
console.log(o)

console.log("   of")
console.log("requires an iterator to be defined on the object")
// 1 2 3
// for (let i of o) {
//     console.log(i);
// }

console.log("   in")
// "a","b","c"
for (let i in o) {
    console.log(i);
}


const s ="abc"
console.log(s);

console.log("   of") // of should be used for string iteration
// "a","b","c"
for (let i of s) {
    console.log(i);
}

console.log("   in")
// "0","1","2"
for (let i in s) {
    console.log(i);
}
```