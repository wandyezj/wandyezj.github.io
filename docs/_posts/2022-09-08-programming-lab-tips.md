# Programming Lab Tips

A collection of tips for writing programming labs.

## Principles

- Communicate clearly.
- Spend students time wisely.
- Focus on specific learning goals.

## Tips

- Write Programming labs in markdown.
    - markdown provides support for programming text highlighting and allows copy and paste from the lab.

- Provide any text you want students to output exactly so it can be copied into their program.
    - Don't make students manually write out text from a picture, this isn't a good use of their time.

- Provide any starting code you want students to play with in program files.
    - Do not make students copy this code into separate files.

- Code Samples in markdown files should be between code blocks ` ``` ` do not use `>` blocks for code.

- If asking students to predict a value, make sure there is an equivalent step to check that their prediction is correct.
    - I found in an exercise on predicting simple expression outputs in Python there was a section to predict both resulting type and value. There was a check for the actual value, but not for the actual type. It's important to provide the check or students can walk away without correcting their prediction.

- Make sure there is enough room in tables for students answers, especially if copy and pasting responses.

- Follow up any exercises that ask students for predictions by providing better rules for future predictions.

- If using Markdown avoid adding HTML tags to the markdown as not all markdown readers render it properly.
    - Instead of color apply bold and italic to draw attention.

- Do __NOT__ use the term `Whole Number`
    - The term [Whole Number](https://en.wikipedia.org/wiki/Whole_number) is ambiguous.
    - Instead use the term `Natural Number` or `Integer` depending on which you mean.

- Teach about [formatting string literals](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals) so students don't was time doing a bunch of plusses.

- Teach a input redirection from a text file so students don't have to continuously type in things to test their program. This also gives them test cases to check against.
    > python main.py < test.txt

- Input validation, go over different types.
    - number ranges
    - static list
    - strings determining it's part of speech and spelling is hard. Use API.

- If referencing something else provide a link, don't merely say 'this is a concept covered somewhere else'. Give a specific link to that somewhere else.
