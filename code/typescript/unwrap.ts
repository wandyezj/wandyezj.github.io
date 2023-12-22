const x: object = /*magic that returns... */ new Wrapped(32);
let y = unwrap(x); // <-- y is number, but y: ???
//  ^?

declare class Wrapped<T> { constructor(arg: T); value: T }

type Unwrap<T> =
    T extends string | number | boolean ? T :
    T extends Wrapped<infer U> ? U :
    { [K in keyof T]: Unwrap<T[K]> };

function unwrap<T>(arg: T): Unwrap<T>;
function unwrap(arg: any): any {
    // string -> string, et al
    // Date -> Date
    // Wrap<T> -> T
    // T[] -> Unwrap<T>
    // { x: Wrap<T> } -> { x: T }
    return arg;
}

declare const obj: { x: string, y: Wrapped<number>, z: Array<Wrapped<boolean>>, t: readonly [Wrapped<string>, boolean] }
const output = unwrap(obj);
//     ^?