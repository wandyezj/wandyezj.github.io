# scratch

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