# Introduction to Software

- Values
- People
- Process
- Trust
- Power

## Values

What are your values?

All software is a tradeoff of values, it represents the values of its creators.

- Privacy
- Security

Technology is the synthesis of values.

Software is written for people; not machines.

Give Examples

Cameras every where with facial recognition can track people

Phones in your pocket have GPS and can track your location and listen in on anything you say.

Accessible to people with disabilities, [Americans with Disabilities Act of 1990](https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990)

What you value and what you do matters.



## Bugs

We're not flawless MLP song

- explanation of tradeoff and maret pressure leading to non flawless software in certain discipline, Therac 25


## Software Over Skype

### Setup

Create a Skype Meeting

Create a Github account, come up with a alias and logo

Create a new repository

Install Python need a custom installation if don't have admin privledges

Create a new GitHub CodeSpace
https://docs.github.com/en/codespaces/getting-started/quickstart

Adding a file

Git Committing and pushing changes

Python Hello World

Windows Key + type
ctrl + s

F5 to run

executes the line
need to have specific key words

what do colors represent?

Turn on line numbers

comments

- print
- Sequence
- executed each statement in order
- variables
- add


### Selection

Open Github Desktop
Open IDLE



- booleans
- operators
- True False
- and and or
- if
- elif and else is optional
- picks first one that is true
- block keyword all the lines that are indented
- can nest if statements inside of the blosk

- only assign one variable at a time




ctrl + a

## Notes

- Setup
    - GitHub
    - GitHub Desktop
    - Vocabulary: Documentation
    - Python Documentation: https://docs.python.org/3.9/index.html
    - Python Tutorial: https://docs.python.org/3.9/tutorial/index.html
    - Vocabulary: Repository
    - Install Python
    - Vocabulary: Editor
    - Vocabulary: IDE
    - Vocabulary: Shell/ Command Line /  / Console
    - IDLE - enable line numbers
- Sequence
    - code executes from top to bottom one statement at a time
    - Print
    - Vocabulary: Line Number
    - Vocabulary: Function
    - Vocabulary: Argument
    - Name of function, arguments to function
    - Vocabulary: Call - call a function and syntax
    - Vocabulary: Debug
    - Vocabulary: Syntax Error
    - Vocabulary: Logic Error
    - Common Syntax Errors
    - Arithmetic
    - Variables
        - stays the same until assign over it
        - can only use a specific set of characters for a variable
        - case sensitive
        - follow conventions
        - only lowercase letters and underscore in variable names
    - Evaluation of the Right Hand Side is assigned to the Left Hand Side
    - Vocabulary: Character
    - Vocabulary: String
    - Vocabulary: Number
    - Vocabulary: Integer
    - Vocabulary: Float
    - Vocabulary: Assignment
    - type
    - Input
        - always returns a string
        - input is evil
    - Type Conversion
        - int
        - float
        - str
    - Vocabulary: Concatenation


- Assignment - echo

```python
# Minimal
print(input())
```

- Assignment - square area
    - enter the side length of a square and print out its area
    - Specific issues:
        - type conversion
        - int or float?

```python
# Minimal
l = float(input())
print(l * l)
```

```python
# Properly commented and explained
# Calculate the area of a square given the length of the side
length = float(input("square side length: "))
print("square area")
area = length * length
print(area)
```

- Assignment - Hard: given the radius of a circle calculate the area and circumference
    - can make arbitrary hard geometry problems
    - how to get pi?

```python
    import math
    print(math.pi)
```

- Selection
    - booleans
    - Comparison operators
    - and or not
    - if
    - Vocabulary: Block
    - if else
    - if, elif, else

- Assignment - password checker
    - check if "password" is entered, if so print "correct" if not print "enter password"

```python
# minimal
p = input()
if p == "password":
    print("correct")
else:
    print("enter password")
```

- Repetition
    - While
    - Flag
    - For

- Assignment - password checker advances
    - update the password checker to prompt until the password is entered

```python
# minimal
f = True
while f: 
    p = input()
    if p == "password":
        print("correct")
        f = False
    else:
        print("enter password")

```
