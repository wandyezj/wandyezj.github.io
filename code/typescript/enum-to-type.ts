/**
 * Literal values are not assignable to enum types.
 * This is because enums are a distinct type in TypeScript, while literal values are not.
 */

enum e {
    a = "a",
    b = "b"
}

type t = "a" | "b";

type tm = `${e}`; // Converts enum to union of its field values. note: this only works for enums with assigned string values.

// Using the enum as the 
declare function f_enum(p: e): void;

// f_enum("a") // Not allowed
f_enum(e.a)

// Allows using the enum values and the enum type itself.
declare function f(p: tm): void;

f("a")
f(e.a)


