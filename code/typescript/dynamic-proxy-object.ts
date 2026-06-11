// run with: node --experimental-strip-types --no-warnings=ExperimentalWarning <PATH>
// Allow every call to the object to be valid and to trace the path.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

function getNewProxy(chain: string): any {
    /**
     * Proxy call on a property
     * @param args 
     */
    function o(...args: any[]) {
        console.log(`Call ${chain} with arguments: ${JSON.stringify(args)}`);
    }

    return new Proxy(o, {

        get(target: any, prop: any, receiver: any) {
            console.log(`Get ${chain}.${prop}`);
            return getNewProxy(`${chain}.${prop}`);

            // of course we know this is a value we could also return it.
        },

        set(target: any, prop: any, value: any, receiver: any) {
            console.log(`Set ${chain}.${prop} to ${value}`);
            return true;
        },
    });
}

// const handler: ProxyHandler<any> = {
//     get(target: any, prop: any, receiver: any) {
//         console.log(`Get ${prop}`);
//         // if this is a normal property, return it
//         // if this is a path property return the proxy
//         // note: methods are also properties
//         // how to differentiate method, from path, from property?
//         // Is it possible to return something that can track the call or the path?
//         return getNewProxyProperty(prop);
//         // return () => {console.log("calling");}
//         //return target.proxy;
//     },

//     set(target: any, prop: any, value: any, receiver: any) {
//         console.log(`Set ${prop} to ${value}`);
//         //target[prop] = value;
//         return true;
//     },
    
//     // only called if set is not defined
//     // defineProperty(target: any, property: string | symbol, attributes: PropertyDescriptor): boolean {
//     //     console.log(`Defining ${typeof property === "string" ? property : "?"} with ${JSON.stringify(attributes)}`);
//     //     return true;
//     // },
//     apply(target: any, thisArg: any, argArray: any[]){
//         console.log(`Apply ${target} to ${thisArg} with ${JSON.stringify(argArray)}`);
//     }
// };

const o = getNewProxy("o") // new Proxy({}, handler);

function log(name: string) {
    console.log(`\n>>> ${name}`);
}

log("Property Set");
o.property = "test";

log("Property Get");
o.property;

log("Property Set - Nested");
console.log(o.a.b.c = 5); //5

log("Property Get - Nested");
// note cannot console.log the following since it is a proxy
o.a.b.c;

log("Function Call");
o.method(1,"2",{a:3});

log("Function Call - Nested");
o.method1.method2.method3(1,"2",{a:3});

log("Function Call - base");



