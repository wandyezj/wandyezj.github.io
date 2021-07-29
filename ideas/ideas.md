# Ideas

## Twitter Bot - Schedule Post

Run on a local users machine

schedule specific posts

node + typescript

can be triggered from command line via a schedule task

or could be triggered on a schedule from a function

what would happen if a post was not posted on the specified date?

## Standard Node - TypeScript Library

TypeScript library with zero dependencies of common useful functions.

## Office Add-In - Haiku Creator

Use the Datamuse API to check that selected text conforms to a Haiku 5 7 5

reduce calls on the service by caching words once queried.

do multiple calls at once, then resolve when completed.

would be neat to to a visual breakdown of the syllables.

## Color Alphabet

Letter to Color
Each letter on a background of that color

Could attempt to go through the rainbow

Some letters do not have official CSS colors

A - Aqua
B - blue
C - cyan
...
R - red
...

## API Development

https://developers.google.com/style/word-list

## Words

Dictionary of everything about words

Should it be limited to common words? Or should there be a frequency with the word associated?

- Definitions
- Part of Speech
- Pronunciation
    - https://en.wikipedia.org/wiki/ARPABET
    - https://en.wikipedia.org/wiki/International_Phonetic_Alphabet
- Rhyme Cluster
- Synonyms
- Antonyms


Ideally in a purely JSON format

### Existing Dictionaries

http://gcide.gnu.org.ua/

https://freedict.org/documentation/

http://www.manythings.org/vocabulary/lists/l/words.php?f=ogden

https://raw.githubusercontent.com/jonbcard/scrabble-bot/master/src/dictionary.txt

http://wordlist.aspell.net/

## Music Transpose

Listen to any piece of music and write out the notes for all instruments

Should be a standard EE Signal Processing problem of breaking apart signals



## Teaching Writing

Is is more effective to have students write their own stories with their own characters?

Would that help them better analyze their characters in other stories?

How does this kind of story thinking apply to real life situations?


## TSV <-> JSON

Convert JSON to a TSV and a TSV to JSON. Requires limitation on the structure of JSON.

JSON
```json
[
    {
        "name":"my name",
        "value":"my value",
        "id":"5",
        "nested": {
            "x":"50",
            "y":"32"
        }
    },
    {
        "name":"hello",
        "value":"world",
        "id":"50",
        "nested": {
            "x":"0",
            "y":"0"
        }
    }
]
```

TSV

```tsv
name	value	id	nested.x	nested.y
my name	my value	5	50	32
hello	world	50	0	0
```

- objects `{}` can be easily decomposed and recomposed by simply adding a deliminator to denest the object

- lists `[]` are harder to decompose and recompose especially if they contain objects, so it might be easier to avoid lists alltogether

- TSV only had the option for strings, so all values should be treated as strings



## TSV Schema checker

A way to check that data in a TSV file adheres to a set schema.

Check that all rows have appropriate number of tabs and appropriate number of values

Schema should specify how the strings in the csv (all fields by default) should be interpreted

Should all be describable and accomplishable with regex, although faster validation techniques could be used

- optional modifier, allow no value as an answer
- enum - one of a list of values
- number - requires specification of allowable range of values, minimum and maximum, along with if only integers are allowed or if decimal numbers, is scientific notation used? what is the accuracy of the decimal to how many places? Would be convenient to have a set of standard types and validators?
- string - specification of what characters are allowed in the string

How long does it take to validate and entire TSV file? How expensive are the regex to run? (Technically this is a prefectly parallel problem)

Should output list of validation errors, row number and column number along with offending value and 


## Transportable Data Process

A way to check that data and everything around the data is defined.