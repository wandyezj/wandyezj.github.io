function placeholder(index: number) {
    return `_____${index}_____`
}

function normalAndCensor(strings: string[], ...values: string[]): [string,string] {

    const normal = strings.reduce((result, s, i) => `${result}${s}${values[i] || ""}`, "");
    const censored = strings.reduce((result, s, i) => `${result}${s}${values[i] ? placeholder(i) : ""}`, "");
    return [normal, censored]
}

function uncensor(s: string, values: string[]) {
    return values.reduce((previous, current, index) => {
       return previous.replace(placeholder(index), values[index]); 
    }, s)
}

const rootFolder = "Secret Content A";
const fileName = "Secret Content B";

const [normal, censor] = normalAndCensor`/me/drive/${rootFolder}/${fileName}:/content?@microsoft.graph.conflictBehavior=rename`;
const display = uncensor(censor, ["rootFolder", "fileName"]);

console.log(normal);
console.log(censor);
console.log(display);

// [LOG]: "/me/drive/Secret Content A/Secret Content B:/content?@microsoft.graph.conflictBehavior=rename" 
// [LOG]: "/me/drive/_____0_____/_____1_____:/content?@microsoft.graph.conflictBehavior=rename" 
// [LOG]: "/me/drive/rootFolder/fileName:/content?@microsoft.graph.conflictBehavior=rename" 