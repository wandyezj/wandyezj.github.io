# Single Pass Markdown

Limit Markdown to a subset of simple rules that can be rendered in a single pass. Ideally this means minimal (ideally zero) data needs to be stored in memory for later.

Priorities

- Single way of denoting blocks
- Single Pass
- Simple Logic
- Render similarly to existing markdown but complete compatibility is not required.
- rendering should happen on the client side to reduce the amount of data the server has to send and to reduce compilation times

## Reference

https://marked.js.org/demo/

## Features

### Paragraph

```md
text
```

```html
<p>text </p>
```

any text after a newline to the next newline is considered to be part of a new paragraph by default. Control characters can change the block the text is a part of.


### Heading

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
####### Paragraph
# # Heading
```

```html
<h1> Heading 1</h1>
<h2> Heading 2</h2>
<h3> Heading 3</h3>
<h4> Heading 4</h4>
<h5> Heading 5</h5>
<h6> Heading 6</h6>
<p>####### Paragraph</p>
<h1># Heading</h1>
```

Any hash `#` after a newline `\n` triggers a search for up to 6 subsequent hashes.
- if hash count > 6 paragraph
- if hashcount <= 6 header
subsequent text to the next newline is considered part of that block


### Unordered Lists

```md
- a
- b
- c

-a

-    s    
```

```html
<ul>
<li>a</li>
<li>b</li>
<li>c</li>
</ul>

<p>-a</p>
<ul>
<li>    s    </li>
</p>
```

control sequence newline '`\n`' dash '`-`' space '` `'.

an initial control sequence determines an unordered list. The unordered list ends when the next newline does not start with the control sequence. The list considers all text after the control sequence to the next newline to belong as text.


### Ordered Lists

Same as unordered list but with a different control sequence:

control sequence newline '`\n`' one '`1`' dot '`.`' space '` `'.

###