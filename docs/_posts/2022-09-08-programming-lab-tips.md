# Programming Lab Tips

A collection of tips for writing programming labs.

## Principles

- Communicate clearly.
- Spend students time wisely.
- Focus on specific learning goals.

## Tips

- Have clear done criteria
    - Explain the goal of the lab and the conditions under which a student should move on.
    - Lab tasks written in an open ended way can lead students to spend time on them beyond what is useful for their learning. Students should know when to get help and when to move on.

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
    - Instead of color, apply bold and italic to draw attention.

- Do __NOT__ use the term `Whole Number`
    - The term [Whole Number](https://en.wikipedia.org/wiki/Whole_number) is ambiguous.
    - Instead use the term `Natural Number` or `Integer` depending on which you mean.

- Teach [formatting string literals](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals) so students don't was time doing a bunch of plusses.

- Teach input redirection from a text file so students don't have to continuously type in things to test their program. This also gives them test cases to check against.
    > python main.py < test.txt

- Input validation, go over different types.
    - number ranges
    - static list
    - strings determining it's part of speech and spelling is hard. Use API.

- If referencing something else provide a link, don't merely say 'this is a concept covered somewhere else'. Give a specific link to that somewhere else.

- Have repository of good solutions to common problems (these are buildings blocks for programs)
    - list of numbers 0 to n -1 `list(range(n))`
    - list of characters a-z plus other groups of characters

- After the programming lab present a potential solution
    - show the approach to the solution (How did you get the answer?)
    - show any tips and tricks
    - explain the final piece of code
    - The potential solution is

- Teach input validation
    - Is a Natural number `isnumeric`
    - Is an integer (careful, negative numbers, are tricky)
        - PEP: Python should provide an isinteger method for strings.
    - Is a float
        - PEP: Python should provide an isfloat method for strings.

- Debugging
    - Testing individual values and small snips in the console.
    - Use of `type` to check a variables type.
    - Explanation that types have different domains.

- Types
    - Generally it's best to avoid comparing different types.
    - general example is string and integer

- Careful with or
    - `or` should only be used in boolean expressions.
    - Python has a confusing property where it returns the value of the first thing if it is truthy. `'a' or 'b'` returns `'a'`

- Tuples and Lists
    - difference between tuples and lists

- `if` `else`
    - Use if else instead of inverting the expression, that way you can guarantee that only one path is executed. Otherwise risk a bug in either statement potentially executing both.

- Teach consistent variable naming conventions
    - In Python this would be PEP8 - variables are all lowercase with underscore separating words.
    - Explain how this makes it easier to type variable names and avoid

- Associates Lists
    - Associate two lists. Use the index of one value in a list to access the value in another list.

    ```python
    letters = ["a", "b"]
    messages = ["a is awesome", "b is best"]

    choice = input("pick a letter")

    # what if you wanted to make sure you don't look up something that doesn't exist?
    index = letters.index(choice)
    print(index)

    message = messages[index]
    print(message)
    ```