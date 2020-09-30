# TypeScript Structures

[TypeScript AST Tree Viewer](https://ts-ast-viewer.com)

## ExpressionStatement

```typescript
declare let variable: string;

variable = "value"
```

note: a function call is also an ExpressionStatement

## VariableStatement

```typescript
const variable = "value"
```

## Block

```typescript
{

}
```

## IfStatement

```typescript
declare let condition: boolean;
if (condition) {

}

```

## ForStatement

```typescript
for (let i = 0; i < 3; i ++){

}
```

## ForOfStatement

```typescript
for (let i of [1, 2, 3]){

}
```

## ForInStatement

```typescript
for (let i in [1, 2, 3]){

}
```

## WhileStatement

```typescript
declare let condition: boolean;
while(condition) {

}
```

## DoStatement

```typescript
declare let condition: boolean;
do {

} while(condition)
```

## SwitchStatement

```typescript
declare let selection: string;
switch (selection) {
    case "a":
        break;
    case "b":
    default:
        break;
}
```

note: cases fall though to the next case unless they follow a break.

## BreakStatement

```typescript
break;
```

