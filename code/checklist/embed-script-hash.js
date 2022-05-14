
// WSL Test command
// node ./embed-script-hash.js && cat ./checklist.js | openssl sha256 -binary | openssl base64

/**
 * Get the data between the first complete <script> </script> tags.
 * @param {string} data
 * @returns {string | undefined}
 */
function getScriptData(data) {
    // read script node from html
    // only handles first script tag, does not handle script tags in strings

    // Node does not have a built in XML parsing library.
    const delimiterScriptOpen = "<script>";
    const delimiterScriptClose = "</script>";

    const scriptOpen = data.indexOf(delimiterScriptOpen);
    const scriptClose = data.indexOf(delimiterScriptClose, scriptOpen);

    const scriptData = data.substring(scriptOpen + delimiterScriptOpen.length, scriptClose)
    return scriptData;
}

/**
 * 
 * @param {string} data
 * @returns {string} hash of the data
 */
function getHash(data) {
    const {
        createHash
    } = require('crypto');

    const hash = createHash('sha256');

    hash.update(data);

    const digest = hash.digest('base64')

    return `sha256-${digest}`;
}

/**
 * 
 * @param {string} data 
 * @returns {string}
 */
function visible(data) {
    return`----\n${data.replace(/ /g, ".")}\n----`
}

function main() {
    const filePath = "checklist.html";

    // read file data
    const fs = require('fs');
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });

    const scriptData = getScriptData(data);

    if (scriptData === undefined) {
        console.error("Could not retrieve script data.")
        return 1;
    }

    const filePathOut = "checklist.js";

    fs.writeFileSync(filePathOut,scriptData);

    // text
    // first 80
    console.log(visible(scriptData.substring(0,80)));
    //last 80
    console.log(visible(scriptData.substring(scriptData.length -80)));

    const scriptHash = getHash(scriptData);

    console.log(scriptHash);

    // hmm... why is the hash not the same as the one the browser calculates?

    // embed hash in the document (don't actually modify the original document that's dangerous!) Instead create a new document with the hash embedded

}


main();