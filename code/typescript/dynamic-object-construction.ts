
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
    // automatically add load property for properties, that adds the properties dynamically

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