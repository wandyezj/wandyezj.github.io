# Scripting Guidelines

- Output a external command before calling it
    - makes it easy to tell what command failed, and to rerun it independently if possible

- Do __NOT__ prompt while the script is running and wait for user input. Instead have the runner pass in all data to the script up front, possibly via a configuration file if necessary.

- avoid not in method and variable names, instead describe what is.

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

