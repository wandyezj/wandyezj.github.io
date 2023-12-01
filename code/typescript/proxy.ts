// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const handler: ProxyHandler<any> = {
    get(target: any, prop: any, receiver: any) {
        console.log(`Getting ${prop}`);
        // if this is a normal property, return it
        // if this is a path property return the proxy
        // note: methods are also properties
        // how to differentiate method, from path, from property?
        return target.proxy;
    },
    set(target: any, prop: any, value: any, receiver: any) {
        console.log(`Setting ${prop} to ${value}`);
        //target[prop] = value;
        return true;
    },
    // only called if set is not defined
    // defineProperty(target: any, property: string | symbol, attributes: PropertyDescriptor): boolean {
    //     console.log(`Defining ${typeof property === "string" ? property : "?"} with ${JSON.stringify(attributes)}`);
    //     return true;
    // },
    apply(target: any, thisArg: any, argArray: any[]){
        console.log(`Applying ${target} to ${thisArg} with ${argArray}`);
    }
};

const target = {
    proxy: undefined,
};

const proxy = new Proxy(target, handler);
target.proxy = proxy;

const o = proxy;

function log(name: string) {
    console.log(`>>> ${name}`);
}

log("Property Set");
o.property = "test";

log("Property Get");
o.property;

log("Nested Property Set")
console.log(o.a.b.c = 5); //5

log("Nested Property Get");
// note cannot console.log the following since it is a proxy
o.a.b.c;

log("Function Call");
o.method(1,"2",{a:3});
