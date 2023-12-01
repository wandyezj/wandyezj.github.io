// callable function with object properties
const o = function() {
    console.log("call")
}

o()
o.value = 5;

console.log(o.value)