# Scripting Guidelines

- Output a external command before calling it
    - makes it easy to tell what command failed, and to rerun it independently if possible

- Do __NOT__ prompt while the script is running and wait for user input. Instead have the runner pass in all data to the script up front, possibly via a configuration file if necessary.

- avoid not in method and variable names, instead describe what is.

- use standard data storage formats, {tsv, json, xml} custom file formats are a difficult for other people to understand and use. Consider using tsv over csv files as tsv files are significantly easier to parse correctly than csv files (csv files have all sorts of edge case rules). If writing csv files consider removing all "," from any data written as these will mess up the output text. When writing tsv make sure to replace all tabs in the data with four spaces. Overall tsv is significantly easier to get correct than csv.

- writing log files while the script runs can be helpful to debug the script later especially if there are rare issues that occur. Take care if writing a daemon that log files do not build up over time.

- Do __NOT__ hardcode array indices, instead assign indices to constants and use those to reference the array.

    ```typescript
    // BAD - DONT DO THIS!!!
    function bad(something: string) {
        const elements= something.split();

        doThing(elements[0]);
    }


    // GOOD
    function good(something: string) {
        const elements = something.split();

        // This lets someone easily adjust the index later if necessary, without having to comb through where elements is referenced
        const expectedValueIndex = 0;

        // This lets someone check what the value is up front
        const expectedValue = elements[expectedValueIndex];

        // better is array decomposition if available in the scripting language, however this can be annoying if there are multipe values and you only want to reference one or two in the middle of the array
        const [expected, anotherExpected] = elements

        doThing(expectedValue);


    }
    


    ```

- Do __NOT__ use the term _average_, use {mean, median, mode}
    - average is an ambiguous word, instead specify the specific measure of average

- Specify units in variable, parameter, and function names
    - This helps ensure units are consistent throughout and helps prevent unit conversion bugs

```typescript
// BAD - DONT DO THIS!!!

const startTime = getTimeSinceStart();

// GOOD

const startTimeMilliseconds = getMillisecondsSinceStart()

```

- Always Use Unicode UTF-8 for all files

- Write files to a folder, when possible delete the folder before running again

- Avoid consuming the output of the script as the input for a new run of the script. Strongly prefer to have the input and outputs be separate.

- It's possible to string scripting languages together, by having one script output another script and then running that script in its environment

- Prefer TSV file format for any table based data for excel. Avoid CSV format as it has many exceptions and it much harder to parse correctly

- prefer JSON format over XML where possible.

- Prefer strongly typed scripting languages, it keeps you from making dumb mistakes

- Within a team standardize on one scripting language, preference should be node TypeScript