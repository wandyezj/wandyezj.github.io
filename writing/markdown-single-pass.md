# Single Pass Markdown

Limit Markdown to a subset of simple rules that can be rendered in a single pass. Ideally this means minimal (ideally zero) data needs to be stored in memory for later.

Priorities

- Single way of denoting blocks
- Single Pass
- Simple Logic
- Render similarly to existing markdown but complete compatibility is not required.
- can be completely converted to minimal set of markdown that every markdown editor supports without adding HTML tags. (although note any inline html automatically gets rendered as html, so...)
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
#heading
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
<p>#heading</p>
```

Any hash `#` after a newline `\n` triggers a search for up to 6 subsequent hashes followed by a space.
- if hash count > 6 paragraph
- if hashcount <= 6 header
subsequent text to the next newline is considered part of that block


### Unordered List

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


### Ordered List

Same as unordered list but with a different control sequence:

control sequence newline '`\n`' one '`1`' dot '`.`' space '` `'.

### Link

Markdown links are not as perfectly streamable as headers, paragraphs, and lists since it requires looking ahead to parse out the complete link.

```md
[title](link)

before [wandyezj](https://wandyezj.com) after

[wandyezj](https://wandyezj.com)

[]()

[] ()

[
```

```html
<p><a href="link">title</a></p>

<p>before <a href="https://wandyezj.com">wandyezj</a> after</p>

<p><a href="https://wandyezj.com">wandyezj</a></p>

<p><a href=""></a></p>

<p>[] ()</p>

<p>[</p>
```

As soon as a open square bracket `[` is encountered no additional text can be written until either the markupable text field ends or a close square bracket `]` and open round bracket `(` is encountered, no text can be written until the final closing round bracket `)` or the end of line are encountered. If the full sequence of control characters is encountered then a link can be written using the contents between the open and closing square brackets as the title and the contents between the open and closing round brackets as the link.

the first close square bracket after the first open square bracket is assumed to be the closing bracket. Similarly the first close round bracket after the open round bracket is considered to be the closing bracket.

### images

```md
![alt](link)

![]()
```

```html
<p><img src="link" alt="alt"></p>

<p><img src="" alt=""></p>
```


Same as Link, with an exclamation point to start with a different html block output.


### Reference Link

```md
[reference]: link

[reference]


[reference two]: linktwo

[title][reference two]

[reference three]: linkthree "titlethree"

[reference three]
```

```html
<p><a href="link">reference</a></p>

<p><a href="linktwo">title</a></p>

<p><a href="linkthree">titlethree</a></p>
```

### Code

```md

```code```

before ```some code``` after
```

```html
<p><code>code</code></p>

<p>before <code>some code</code> after</p>
```

Same line verses multiline

three backticks in a row \`\`\` followed by any text and a newline characters and a newline is the delimiter, it searches for the next delimiter three backticks in a row followed by a newline \`\`\``\n` to end the code block. An alternative delimiter skips the newlines which are then not required

note: could also support single ` on a line, but this seems redundant.

What about:
```test```