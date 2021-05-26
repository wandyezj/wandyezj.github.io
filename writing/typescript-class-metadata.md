# TypeScript Class Metadata

```typescript
// Associate and retrieve metadata with a class method so it can be used on the instance

namespace N {
    export class C {

        m() {
            
        }

        // if there are other classes will need to make sure they do not use this property for other purposes
        static readonly metadata = {
            classname: "C",
            methods : {
                "m": {
                    property: "example"
                }
            }
        }
    }
}

// namespaces are not present as separate entitites
const c = new N.C();


console.log(typeof c) // "object"
console.log(Object.getPrototypeOf(c).constructor.name) // "C"
console.log(c.m.name) // "m"
console.log(Object.getPrototypeOf(c).constructor.metadata.classname) // "C"

// retrieve metadata off of class prototype
function getMethodMetadata(o: object, method:Function) {

    // may not have a constructor if it is a normal object
    const classMetadata = Object.getPrototypeOf(c).constructor.metadata;
    if (classMetadata === undefined) {
        return {}
    }

    if (typeof classMetadata === "object") {
        const methodName  = method.name;
        const methodMetadata = classMetadata.methods[methodName]
        return methodMetadata
    }
    
    return {}
    
}

console.log(getMethodMetadata(c, c.m)); // { "property": "example"}

// Is there a way to tell p


```
