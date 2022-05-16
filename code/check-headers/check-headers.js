// check headers for a url

const process = require("process")

const args = process.argv.slice(2);

if (args.length != 1) {
    console.log("usage: [url]");
    process.exit(1);
}

const [url] = args;

console.log(url);

const https = require("https")

https.get(url, (response) => {
    const {statusCode, statusMessage, headers} = response;

    const header = Object.getOwnPropertyNames(headers).map((name) => {
        const value = headers[name]
        return `${name}\n\t${value}`
    }).join("\n\n")

    console.log(`
statusCode: ${statusCode}
statusMessage: ${statusMessage}
headers:

${header}
    `);


});



