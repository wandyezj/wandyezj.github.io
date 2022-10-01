# Safe Script Token State Machine

Describe the state machine for parsing tokens

Character by character how does it decide the length of a token.

## Principles

Ideally, each token delimiter does not contain spaces, however this isn't strictly necessary.

As few keywords as possible.

Reserved Keywords - Keywords may not be used as identifiers.

Restrict all syntax to a specific known sequence of characters.

Restricting identifiers to a specific sequence is convenient.

Can operators be any group of symbols?

## Keywords

- `let`
- `const`
- `if`
- `else`
- `or`
- `and`
- `:`
- `+`
- `-`
- `*`
- `/`
- `%`
- `(`
- `)`
