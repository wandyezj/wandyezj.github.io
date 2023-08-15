# Markdown Documentation

What standards should apply when writing markdown documentation?

- Avoid HTML tags inline
    - The tricky part about md is you read things as both a text file and as the preview html version. Most of the time, I'm not reading the preview. The HTML tags tend to be harder to read (at least for me).

- block quotes for commands to run
    - It's a forcing function to put the command on its own line, which makes it easier to see (it's not embedded in a paragraph) and to cut and copy (can copy the whole line). It's important the command is visible since people will often remember where the command is, but not necessarily the specific command. It's annoying to have to pick things out of paragraphs when scanning for the command.