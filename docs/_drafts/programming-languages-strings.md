# Programming Languages Strings

A fundamental data construct

## String Literal Declarations

### Python

```python

# single line strings
s = ""
```

```python
s = ''
```

```python
# multi line strings
s = """
"""
```

```python
s = '''
'''
```

```python
# raw string (no escape sequences) 'r' can be placed in front of any declaration
s = r''

```

### Typescript

```typescript
// single line string
let s = "";
```

```typescript
// single line string
let s = '';
```

```typescript

// multi line string that also allows string interpolation
let variable = "hello";
let s = `
${variable}
`;

```

### C Sharp

```csharp

string s = "";
```

```csharp
// multi line string (no escape sequences)
string s = @"
";
```

```csharp
// string interpolation
var variable = "hello";
string s = $"{variable}";

```


## Character sequences often in strings

For Markdown:

Triple backtick
> \`\`\`


Single Quote `'` and Double Quote `"` are common in normal language.


Escape sequences

Regex

## Thoughts

- String Interpolation is a fantastic feature! Saves lots of time from having to deal with a format function in many cases.

- Having to escape sequence characters can be annoying. Although, escape sequences can also be convenient for certain types of characters.

Three Main types of strings

- raw literal strings
- Strings that allow escape sequences
- Strings that allow string interpolation


## Scratch

How are strings deliminate in different languages? Advantages disadvantages?

What is the underlying type?

bytes? utf-8?

bytes most adaptable. Indexing is difficult in a pure unicode string anyway.

starts_with and ends_with work across unicode strings. 
