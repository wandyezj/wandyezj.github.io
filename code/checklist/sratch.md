# scratch

## canvas

```typescript

        //#region "canvas"
        /**
         * canvas is a bit pixelated
         * @param {Configuration} configuration
         * @param {HTMLCanvasElement} canvas
         */
         function drawConfigurationCanvas(configuration, canvas) {
            canvas.width = 200;
            canvas.height = 200;
            const context = canvas.getContext("2d");

            const { title, description, items, state } = configuration;

            context.font = '20px serif';
            context.textBaseline = "alphabetic"; //"alphabetic"; 

            const checkboxSize = 10;
            const checkboxColor = "#000000"; // black
            const textColor = "#000000";

            const measure = context.measureText(title);
            const height = measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent;

            // write out title
            context.fillText(title, 0, height);

            // Draw all of the configuration settings on the canvas

            const spacing = height + 10;
            let y = spacing;
            let x = 10;



            items.forEach(({ id, title, input }) => {
                if (input === "checkbox") {
                    // draw the checkbox
                    const value = state === undefined ? undefined : state[id].checkbox;

                    // checkbox
                    // rectangle draws down from the top left x, y
                    context.fillStyle = value ? checkboxColor : "#FFFFFF";
                    context.fillRect(x, y, checkboxSize, checkboxSize);

                    // text
                    // text draws from the left bottom x y
                    const dx = checkboxSize + 10;
                    const dy = checkboxSize;
                    context.fillStyle = textColor;
                    context.fillText(title, x + dx, y + dy);

                    // dot
                    context.fillStyle = "#FF0000";
                    context.fillRect(0, 0, 1, 1);

                    // increase offset
                    y += spacing;

                }
            });

            // Determine how checkbox is drawn

        }

        //#endregion "canvas"
```

```typescript
            const canvas = document.createElement("canvas");
            drawConfigurationCanvas(configuration, canvas);
```

```html
    <br>
    <!-- Div to contain the canvas for the image, shown for testing purposes -->
    <div id="div_configuration_canvas"></div>
```

## html

in loadConfiguration

```typescript
loadConfigurationToHtml(configuration);
```

```typescript
        /**
         * load the configuration to html on the pace so it can be manipulated
         * include state information
         * @param {Configuration} configuration
         */
        function loadConfigurationToHtml(configuration) {
            // get new div children
            const configurationDiv = getConfigurationToDivElement(configuration);
            const children = configurationDiv.childNodes;

            // update the div
            const div = document.getElementById("div_configuration");
            // reset everything in the div, (otherwise end up with duplicate elements on subsequent loads)
            div.innerText = "";
            div.append(...children);
        }
```

```typescript

        /**
         * load the configuration to html on the pace so it can be manipulated
         * include state information
         * @param {Configuration} configuration
         * @returns {HTMLDivElement}
         */
        function getConfigurationToDivElement(configuration) {

            const div = document.createElement("div");

            const { title, description, items, state, configs } = configuration;

            const defaultTitle = "List";
            const defaultDescription = "";

            const listTitle = title || defaultTitle;

            const elementListTitle = document.createElement("h1");
            elementListTitle.innerText = listTitle;

            const elementListDescription = document.createElement("p");
            elementListDescription.innerText = description || defaultDescription;

            document.title = listTitle;

            div.appendChild(elementListTitle);
            div.appendChild(elementListDescription);

            // append all list elements
            const children = items.map(({ id, title, description, input, configId }) => {

                const elementDiv = document.createElement("div");

                // determine input type
                // why not simply assign? - security plus elements have different needs
                if (input === ConfigurationInputType.Checkbox) {
                    const elementInput = document.createElement("input");
                    elementInput.type = "checkbox";
                    elementInput.name = title;
                    elementInput.id = id;

                    // use preserved state
                    if (state && state[id] && typeof state[id]?.checkbox === "boolean") {
                        elementInput.checked = state[id].checkbox
                    }

                    const elementLabel = document.createElement("label");
                    elementLabel.for = id;
                    elementLabel.innerText = title;

                    elementDiv.appendChild(elementInput);
                    elementDiv.appendChild(elementLabel);

                } else if (input === ConfigurationInputType.Likert) {
                    // TODO
                    // how to represent likerts? Series of checkboxes?
                    const config = configs[configId];
                    if (configId === undefined) {
                        console.error(`invalid configId for item [${input}]`);
                        const p = document.createElement("p");
                        p.innerText = `item [${name}] configId [${configId}] not found.`;
                        elementDiv.appendChild(p);
                    } else {
                        // create checkbox for each item in the likerts
                        const elements = config.likert.options.map(({ value, description, color }, index) => {
                            // Use radio?
                            // const elementInput = document.createElement("input");
                            // elementInput.type = "radio";
                            // elementInput.name = title; // names need to be same for all radios
                            // elementInput.id = id;

                            // Can set a different style for each checkbox

                            // nest inside label tag and apply css rules to the label?

                            // check box
                            const elementInput = document.createElement("input");
                            elementInput.type = "checkbox";
                            elementInput.name = title;
                            //elementInput.id = id; ids should probably be different?
                            elementInput.value = value;
                            return elementInput;
                        });



                        const elementLabel = document.createElement("label");
                        elementLabel.for = id;
                        elementLabel.innerText = title;

                        elementDiv.append(...elements);
                        elementDiv.appendChild(elementLabel);
                    }


                    //elementDiv.appendChild(elementInputDiv);

                } else {
                    console.error(`invalid type for item [${input}]`);
                    const p = document.createElement("p");
                    p.innerText = `item [${name}] invalid type [${input}] for item`;
                    elementDiv.appendChild(p);
                }

                return elementDiv;

            });

            div.append(...children);
            return div;
        }
```

```typescript
        /**
         * Get a snapshot of the current global configuration
         * a snapshot is simply a configuration with the current state of the HTML attached
         * @returns {Configuration} snapshot of configuration
         */
        function getConfigurationSnapshot() {
            const configuration = globalConfiguration;

            // clone configuration
            /**
             * @type {Configuration}
             */
            const snapshot = JSON.parse(JSON.stringify(configuration));

            // empty state
            snapshot["state"] = {};

            // retrieve current state and bind it to the snapshot
            snapshot.items.forEach(({ id, input }) => {
                const element = document.getElementById(id);
                if (element) {
                    if (input === "checkbox") {
                        const checked = element.checked;
                        snapshot.state[id] = { checkbox: checked };
                    }
                }
            });

            return snapshot
        }
```

initialize

```typescript
            document.getElementById("div_configuration").onchange = onConfigurationUpdated;
```