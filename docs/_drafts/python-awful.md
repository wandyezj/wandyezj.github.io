# Python Awful

- No separation between variable declaration and assignment. the fact that variables are function scoped and not block scoped - or more specifically can not specify where they are declared - makes it easy to accidentally overwrite the variable by re-declaring it.

- No static type checking before the code is run. This means all validation happens at run time - and for code that takes a long time to run this massively slows down the development loop.