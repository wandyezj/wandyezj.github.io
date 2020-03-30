# Exploration of Block Programming

## What existing block programming languages exist?

## Tiled Grace

- System allow switch between block and textual programming at any time
- idea is to move from block to textual



## [scratch](https://en.wikipedia.org/wiki/Scratch_%28programming_language%29)

- users take to it quickly, easy for your kids to use, due to immediate feedback from modifications

## [etoys](https://en.wikipedia.org/wiki/Etoys_(programming_language))

- impossible to write invalid code

## [blocky](https://en.wikipedia.org/wiki/Blockly)

- no editable text format
- https://developers.google.com/blockly/guides/get-started/web

## How effective is block programming?


## Advantages of text

- text is usually widely documented
- see which statements correspond to which pieces of code

## References


### [Homer, Michael, and James Noble. "Lessons in combining block-based and textual programming." Journal of Visual Languages and Sentient Systems 3, no. 1 (2017): 22-39.](https://pdfs.semanticscholar.org/bc0a/79d16d20d9457eaa6f25f86c07a1abfee217.pdf)

[Tiled Grace Source Code](https://github.com/mwh/tiledgrace)
- Note GPL V3 __copyleft license!__

- observations: people tend to move naturally to the text mode as they become more advanced

> it is known from both educational psychology in general,
and computer science education specifically, that transitioning
between languages early in learning is unhelpful, or
indeed any attempted transfer of learning at an early stage
without very careful structuring

> instruction must be tailored to assist transfer

people have to be taught that the knowledge is general in order for them to transfer it successfully to other situations

> a key issue in existing
block languages is that using them is exhausting, having high
“viscosity”

- it's difficult to make change to block programs, drag and drop is time consuming, understanding deeply nested blocks is hard

> when everything is new, the impact of retrieving each tile is
unnoticed next to the difficulty of the concepts being dealt
with

> The toolbox is an excellent discovery mechanism for
novices, the ease of getting something going is a significant
driver of engagement, and the lack of syntax errors removes a
major confound faced by novices.

> A commonly-repeated maxim is that a good programmer
can easily learn a new language. Novices are not good programmers, however, and a course structure predicated on
making a language transition will likely run into trouble.

- the paper makes a compelling argument about why it is desireable to be able to switch between block and text programs

> s, the
language must support the learner for long enough to allow
them to build sufficient competence that they can successfully
transfer their skills to another language.

- if teaching 'programming' there is the idea that block programming doesn't count and that text programming is 'real' programming, undermines the learners confidence in their ability


> there is a limited range of sensible shapes that can be readily distinguished and consequential limit on the number of types that can be in
the system. 

- It might make sense to only distinguish boolean expressions from other objects as these are key to control structures


> We considered colour-coding types, such that our anytype holes would be a neutral colour, while strings, numbers, booleans, other objects, and dialect definitions would have their own colours which could be matched on both tile and hole. Similarly to using shapes, however, the number of readily-distinguishable colours is a limit on the number of types that can exist, particularly if user-defined types (such as those of custom objects or classes) are possible.

- essentially there is a limit on the number of feasible shapes and colors that a person can comprehend, color coding and shapes need to be limited for them to easily differentiate

> use jigsaw-puzzle shapes and have a very restricted number of types, or use some sort of feedback during an attempted error but allow unbounded type construction.

- or both


- people seem to find block programming easier overall
- people say that the blocks have mor 'english' constructs which makes it easier to understand than normal code, and avoids syntactic bloat (matchinf brackets etc...)


> . The Weintrop study finds that these shapes were one of the key reasons that users said they found blocks easier to use: the shapes of a block and hole communicate whether they are compatible, while top and bottom connectors made sequencing explicit.

- blocks as memory aids

- promote experimentation with a wide variety of feedback

- drag and drop seems to be preferred interaction model

- drag and drop had accessibility concerns for those who are motor impaired


- unless transition from blocks to code is obvious it makes it hard for people to see the connection

- want up front error reporting over runtime debugging