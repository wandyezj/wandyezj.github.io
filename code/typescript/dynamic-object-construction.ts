
// Object

// Describe a complete API layer in a single namespace and populate it with all nodes in the tree.

/*
Client
    - contains only the type information and JavaScript abstraction layer to access the server.

Server 
    - contains actual implementation

Allow dynamic population of the API layer in JavaScript as it is used.

Specify which properties are needed and also receive information from server about what is supported.
*/

// Idea: All implementation and meaning remains on the server.

/*
- Class
    - These are top level objects
- method
    - Called with an array of arguments
    - These return values or instantiated Classes
- Property Path
    - use getter to populate to return the expected object
    - but this needs to know which object to expect

- Property Value

- enum
*/

type AnyObject = {[key: string]: any}

/**
 * Populates the object with all the nodes
 */
function constructModel(model: string): AnyObject {
    const items = model.trim().split("\n").map(line => line.trim()).filter(x => x!== "");
    items.sort();

    const propertyPaths = items.map(x => x.split("."))

    const o: AnyObject = {};

    for (const path of propertyPaths) {
        let current = o;
        for (const item of path) {
            // add if it doesn't exist add it
            if (current[item] === undefined) {
                current[item] = {};
            }
            current = current[item];
        }
    }

    // But what should exist on the leaf? property or method?
    // automatically add load property for properties, that adds the properties dynamically, then every leaf specified is a method.

    return o;
}


const model = `
a.b.c
a1
a2
a.b1
a.b2
a.b.c1
a.b.c2

`;
const o = constructModel(model);
console.log(JSON.stringify(o, undefined, 4))