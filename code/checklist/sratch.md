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


```typescript
            // legacy
            // const component = encodeURIComponent(text);
            // const url = `${encoding};charset=utf-16, ` + component;
            // downloadFileUrl({filename, url})
```


```html

 <!-- 'data:image/svg+xml,<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="8" cy="8" r="8" fill="white"/><text x="50%" y="100%" text-anchor="middle" font-size="1em">%F0%9F%97%B8</text></svg>'-->

    <!--
        https://content-security-policy.com/script-src/
        remove unsafe-inline
        replace this with a hash of the script
        <meta http-equiv="Content-Security-Policy"
         content="default-src 'self'">
        

        cat ./checklist.js | openssl sha256 -binary | openssl base64
        script-src 'sha512-HASH'

        https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin

        <script src="checklist.js" integrity="sha512-HASH" crossorigin="anonymous"></script>

        For normal development use 'self' 'unsafe-inline'

        Hashes
            - main script tag
    -->
```

```html

    <!-- Content Security Policy for production-->
    <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline' ; script-src 'sha256-kNQ844ZEH9AlmYG2y/K2f1z1Jnh+OJS+aLF6MpUWix8=' "> -->

```


Create iframe and PNG

```js

        /**
         * 
         * @returns {HTMLIFrameElement}
         */
        async function getGeneratorIframe() {
            const id = "iframe_generator";

            let frame = document.getElementById(id);

            if (!frame) {
                // create frame
                const srcdoc = `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <title>Checklist</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta http-equiv="Content-Security-Policy" content="default-src 'unsafe-inline' ; img-src 'unsafe-inline'  data: ; object-src 'unsafe-eval' ; ">
    </head>

    <body>
        <p> Generator Iframe </p>
        <script>

/**
 * draws the png on a canvas ov width x height
 * @param {string} svg string
 * @param {number} png width
 * @param {number} png height
 * @returns {string} png data url
 */
async function svgToPng(data, width, height) {

    console.log("iframe svgToPng")
    const image = new Image();
    //const svg = new Blob([data], {type: 'image/svg+xml'});
    //const url = window.URL.createObjectURL(svg);
    const url = data

    const promise = new Promise(resolve => {
        
        image.onload = () => {
            console.log("iframe image load")

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);

            //window.URL.revokeObjectURL(url);

            const png = canvas.toDataURL("image/png");

            resolve(png);
        }

        console.log("iframe image src")
        // violates CSP
        image.src = url;
    });

    return promise;
}
function initialize() {
    console.log("initialize iframe");

    // accept post message with svg string data use it to generate png string data and send it back

    const onmessage = async (event) => {
        console.log("iframe event");
        const {data, source} = event;

        const {id, content, width, height} = data;
        console.log(data);
        // "hello! : " + content;
        const message = await svgToPng(content, width, height);

        const reply = {id, message};
        console.log("iframe reply");
        source.postMessage(reply);
    };

    window.addEventListener("message", onmessage);

    // notify the parent that is it initialized and ready
    window.parent.postMessage({type:"ready"});
    console.log("ready");

}

initialize();

        <\/script>
    <\/body>
<\/html>
            `;

                iframe = document.createElement("iframe");
                iframe.id = id;
                iframe.srcdoc = srcdoc;
                iframe.hidden = true;

                // wait until iframe ready
                await new Promise((resolve) => {

                    const onmessage = (event) => {
                        const {data, source} = event;
                        const {type} = data;

                        if (type === "ready") {
                            window.removeEventListener("message", onmessage);
                            resolve();
                        }
                    }
                    window.addEventListener("message", onmessage);

                    // starts loading the iframe
                    document.body.appendChild(iframe);
                });

                console.log("iframe ready");
            }

            return iframe;
        }

        /**
         * @param {SVGSVGElement} svg - svg Element
         */
        async function doGenerator(svg) {
            const width = svg.width.baseVal.value;
            const height = svg.height.baseVal.value;

            const xml = svgToTextSvg(svg);
            // make it base64
            var svg64 = btoa(xml);
            var b64Start = 'data:image/svg+xml;base64,';

            // prepend a "header"
            var image64 = b64Start + svg64;

            const content = image64;

            return new Promise(async (resolve) => {
                const guid = Math.floor(Math.random() * 1000);

                const iframe = await getGeneratorIframe();

                const onmessage = (event) => {
                    const {data} = event;
                    const {id, message} = data;

                    if (id === guid) {
                        window.removeEventListener("message", onmessage);
                        resolve(message);
                    }
                }
                window.addEventListener("message", onmessage);

                console.log("post message to iframe");

                //iframe.postMessage({id: guid, content:"hi"}, "*");
                iframe.contentWindow.postMessage({id: guid, content, width, height }, "*");
            });
        }

        async function svgToPng() {
            const configuration = getConfigurationSnapshot();

            const svg = await getConfigurationToSvgElement(configuration);

            // png
            const value = await doGenerator(svg);
            console.log(value);

            // how to download png?


        //     const iframe = getGeneratorIframe();
            

        //     const canvas = document.createElement("canvas");

        //     const context = canvas.getContext('2d');



        //     // see if can get the generator_iframe
        //     document.getElementById()
        //     document.appendChild()

        //     svg = `<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        //     <!-- <rect width="100%" height="100%" fill="green" /> -->
        //     <circle cx="8" cy="8" r="8" fill="white" />
        //     <text x="50%" y="100%" text-anchor="middle" font-size="1em">x</text>
        // </svg>`;


        //     //context.drawImage();

        //     var image = new Image();
        //     image.onload = function() {
        //         console.log("loaded")
        //         context.drawImage(image, 0, 0);
        //     }

        //     // get svg data
        //     var xml = svg;// new XMLSerializer().serializeToString(svg);

        //     // make it base64
        //     var svg64 = btoa(xml);
        //     var b64Start = 'data:image/svg+xml;base64,';

        //     // prepend a "header"
        //     var image64 = b64Start + svg64;
        //     image.src = image64;
        //     //"http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";

        //     return canvas;
        }

```