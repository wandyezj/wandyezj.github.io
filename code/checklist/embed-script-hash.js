
// WSL Test command
// node ./embed-script-hash.js && cat ./checklist.js | openssl sha256 -binary | openssl base64

/**
 * 
 * @param {string} s - string to search in
 * @param {string} delimiterStart 
 * @param {string} delimiterEnd
 * @returns {string|undefined}
 */
function contentBetweenDelimiters(s, delimiterStart, delimiterEnd) {

    const delimiterIndexStart = s.indexOf(delimiterStart);
    const delimiterIndexEnd = s.indexOf(delimiterEnd, delimiterIndexStart + delimiterStart.length);

    const indexStart = delimiterIndexStart + delimiterStart.length;
    const indexEnd = delimiterIndexEnd;

    const data = s.substring(indexStart, indexEnd);

    return data;
}

/**
 * 
 * @param {string} s - string to search in
 * @param {string} delimiterStart 
 * @param {string} delimiterEnd
 * @returns {string|undefined}
 */
function contentWithDelimiters(s, delimiterStart, delimiterEnd) {
    const delimiterIndexStart = s.indexOf(delimiterStart);
    const delimiterIndexEnd = s.indexOf(delimiterEnd, delimiterIndexStart + delimiterStart.length);

    const indexStart = delimiterIndexStart
    const indexEnd = delimiterIndexEnd + delimiterEnd.length;

    const data = s.substring(indexStart, indexEnd);

    return data;
}

/**
 * standardize newlines to proper unix line endings
 * @param {string} s - string to standardize
 * @return {string}
 */
 function standardizeNewlines(s) {
    return s.replace(/\r/gm, "");
}


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

    // const scriptOpen = data.indexOf(delimiterScriptOpen);
    // const scriptClose = data.indexOf(delimiterScriptClose, scriptOpen);

    // const scriptData = data.substring(scriptOpen + delimiterScriptOpen.length, scriptClose)

    const scriptData = contentBetweenDelimiters(data, delimiterScriptOpen, delimiterScriptClose);

    // browser swaps \cr\lf to lf for hash calculation
    const s = standardizeNewlines(scriptData)
    return s;
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

const process = require("process");

function main() {

    
    const args = process.argv.slice(2);

    // hash a specific file
    // really want a config file that is passed in with the hashed to replace.
    if (args.length === 1) {
        const fs = require('fs');
        const data = fs.readFileSync(args[0], { encoding: "utf-8" });
        const hash = getHash(data);
        console.log(`Calculated Hash:
    ${hash}
    `);
        return 1;
    }

    if (args.length !== 3) {
        console.log(args)
        console.log("usage: [file in]  [file out] [csp placeholder]")
        return 1
    }

    const [filePathIn, filePathOut, cspHashPlaceholder] = args;
    console.log(`
in: ${filePathIn}
out: ${filePathOut}
place: ${cspHashPlaceholder}
`);


    // read file data
    const fs = require('fs');
    const data = fs.readFileSync(filePathIn, { encoding: "utf-8" });

    const scriptData = getScriptData(data);

    if (scriptData === undefined) {
        console.error("Could not retrieve script data.")
        return 1;
    }

    // test file contents for openssl calculation
    //const filePathJsOut = "checklist.js";
    //fs.writeFileSync(filePathJsOut,scriptData);

    // text
    // first 80
    //console.log(visible(scriptData.substring(0,80)));
    //last 80
    //console.log(visible(scriptData.substring(scriptData.length -80)));

    // needs to be lf not cr/lf

    const scriptHash = getHash(scriptData);

    console.log(`Calculated Hash:
${scriptHash}
`);

    // embed hash in the document (don't actually modify the original document that's dangerous!) Instead create a new document with the hash embedded

    const delimiterCspStart = `<meta http-equiv="Content-Security-Policy" content=`;
    const delimiterCspEnd = `>`;
    const csp = contentWithDelimiters(data, delimiterCspStart, delimiterCspEnd);

    const cspHashPlaceholderPresent = csp.includes(cspHashPlaceholder);
    if (!cspHashPlaceholderPresent) {
        console.log(`no instance of csp placeholder [${cspHashPlaceholder}] for csp [${csp}]`)
        return 1;
    }

    const cspUpdated = csp.replaceAll(cspHashPlaceholder, scriptHash)

    console.log(`Updated csp
${cspUpdated}
`);

    const dataUpdated = data.replace(csp, cspUpdated)

    fs.writeFileSync(filePathOut, dataUpdated, {encoding:"utf-8"});
    console.log(`wrote update to:
${filePathOut}`)

}


process.exit(main());