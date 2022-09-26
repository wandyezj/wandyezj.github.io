# Python Enhancement Proposal - Optional Colon

There is currently a required colon `:` at the end of `def` `if` `else` `while` and `for`. Is this colon necessary in all cases considering that the newline can also be used as the delimiter?

This colon is frequently forgotten and results in annoying fixes for people new to Python. This presents a speed bump in normal development.

Optional colon proposes to make this currently required colon optional and instead use the newline as the delimiter.

Benefits

- Less characters to type
- One less thing to worry about
- One fewer syntax error to deal with.

Risks

- Is there type of syntax where the colon is absolutely needed?
- Scripts that rely on the colon being there will need to be updated to work with the new syntax

Likely outcome

- People will likely drop the colon completely from their python code.

Options

- flag to forcibly require or disallow the colon

Technical Investigation