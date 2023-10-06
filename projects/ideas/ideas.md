# Ideas


## Custom Card Decks and Dealing to hands

collaborative and online so everyone can see and play their cards

Ability to load a deck and randomize it.

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



## TSV Lint - Schema checker

TSV offers a standard human readable easily consumable format for data. Most data sets are relatively small so this format is convenient.
Unfortunately, TSVs do not come with 

For larger data sets

A way to check that data in a TSV file adheres to a set schema.

TSV embodies the simplest format for a relational database.

Check that all rows have appropriate number of tabs and appropriate number of values

Schema should specify how the strings in the csv (all fields by default) should be interpreted

Should all be describable and accomplishable with regex, although faster validation techniques could be used

- optional modifier, allow no value as an answer
- enum - one of a list of values
- number - requires specification of allowable range of values, minimum and maximum, along with if only integers are allowed or if decimal numbers, is scientific notation used? what is the accuracy of the decimal to how many places? Would be convenient to have a set of standard types and validators?
- string - specification of what characters are allowed in the string
- unique - ensure that any value appears at most once for a column.

reference implementation

How long does it take to validate and entire TSV file? How expensive are the regex to run? (Technically this is a prefectly parallel problem)

Should output list of validation errors, row number and column number along with offending value and 

Technical, needs to be cross platform

JSON that describes the schema

```json
{
    "hasHeader": true,
    "fieldOrder:": ["field_name"],
    "fields": {
        "field_name": {
            "name": "proper name of the field",
            "description":"what does the field mean?",
            "header":"header for the field in the file can check that the correct column is referred to",
            "lint":{
                "type":"regex",
                "value":""
            }
        }
    }
}
```

```typescript

interface LintRule {
    description?: string;
    /**
     * See if the field value matches the regex
     */
    regex?: string; // since all CSV values are strings regex can be used for all of them
    
    /**
     * See if the field value matches one of the values.
     * Useful for enum like values.
     * This is simply a regex of the values `^(valueOne|valueTwo)$` but this is a little easier than a regex, and potentially more performant.
     */
    oneOf?: string[]
}
//     regex: string;
// {
//             description?: string;
//             engine: string;
//             parameters?: {[name: string]:string}
//         }

/**
 * Schema used to lint a tsv file
 */
interface LintSchema {
    /**
     * Version of the lint schema file
     */
    version: 0;

    // /**
    //  * The TSV file has headers. Skips the first line if true.
    //  * should it simply be required that a TSV head a header?
    //  */
    // hasHeaders?: boolean;

    /**
     * Describe the TSV header
     */
    header: {
        /**
         * Header is present, default is false
         */
        present: boolean;

        /**
         * Header field names are unique.
         * Checks this by comparing all header field names.
         */
        unique?: boolean;
    }

    // 
    /*
        Assumes all columns are listed

        how to target the fields for validation?
        any field with a linter rule
        can simply lint all fields listed targeted based on index and header
        lint fields in order
        lint a specific set of fields
    */
    //lintFields: "list"

    /**
     * Order of the fields to validate
     * This requires a number of entries equivalent to the number of columns in the TSV, what if only want to validate a few columns and know their indicies? Annoying to type a bunch of empty spaces
     */
    //fieldOrder: string[] | {index: number, name: string}[];

    /**
     * All the fields listed in the TSV. There should be one entry for every field in the TSV. The entry can be an empty object {} for an undescribed field.
     * If the index is present objects must be listed in ascending order.
     */
    fields: [
        {
            /**
             * human metadata name for the field
             */
            name?: string;

            /**
             * human metadata to describe what the field represents
             */
            description?: string;


            /**
             * human metadata to describe what unit the field is measured in.
             * Ideally an SI Unit
             */
            unit?: string;

            /**
             * zero based index of the field in the TSV
             */
            index?: number;

            /**
             * the header that should be on top of the field in the CSV file, useful to check that the right column was captured.
             * ignored if hasHeader is false
             */
            header?: string;

            /**
             * The lint rule to apply to the value.
             * Lint rules can only apply to single values in the field.
             * Some lint rules are built in as standards.
             * Custom lint rules are prefixed with `custom.` followed by the name of the rule.
             * The custom prefix allows new built in types to be added without breaking existing custom rules.
             */
            lint?: string | LintRule;
        }
    ];

    // /**
    //  * custom lint rules
    //  * allows sharing of rules between fields.
    //  */
    // custom: {
    //     [name: string]: LintRule;
    // }
            // {
            //      /**
            //       * name of the rule to apply
            //       * built in rules like regex or type or custom which can
            //       * want some set of built in lints that can be easily referenced and can't be overwritten.
            //       */
            //     rule: "regex" | "type" | "custom";
            //     value:

            //  }

}



```

field order and type order?

has header tells validation to ignore the first field of the data set, default is false.

field order is separated from the definition to enable recycling of field defintions, or easy reordering, or skipping of validation on specific fields, for example could provide "" multiple times to skip validation for a column.





## Transportable Data Process

A way to check that data and everything around the data is defined.