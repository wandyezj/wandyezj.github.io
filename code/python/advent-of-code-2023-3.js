let data = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

// 6762441 high
// 526341 low
// How to approach?
// parse out the numbers
// parse out positions of the numbers
// parse out positions of symbols

console.log(data);

const grid = data
    .trim()
    .split("\n")
    .map((line) => line.split(""));
//console.log(lines);

function isDigit(value) {
    return value >= "0" && value <= "9";
}

function isSymbol(value) {
    return value !== "." && !isDigit(value);
}

function isSymbolInGrid(x, y, grid) {
    if (y >= grid.length || y < 0) {
        return false;
    }
    let row = grid[y];
    if (x >= row.length || x < 0) {
        return false;
    }
    const value = row[x];
    return isSymbol(value);
}

function nextToSymbolInGrid(x, y, grid) {
    const indices = [
        // x y
        [1, 0], // right
        [-1, 0], // left

        [0, 1], // above
        [0, -1], // below

        [1, 1], // right above
        [-1, -1], // left below
        [-1, 1], // left above
        [1, -1], // right below
    ];

    for (const [dx, dy] of indices) {
        const value = isSymbolInGrid(x + dx, y + dy, grid);
        if (value) {
            return true;
        }
    }
    return false;
}

// go through the grid getting all of the numbers

let total = 0;
const numbers = [];
// go through each row
for (let y = 0; y < grid.length; y++) {
    const row = grid[y];

    // go through each column
    let currentNumber = "";
    let symbolAdjacent = false;
    for (let x = 0; x < row.length; x++) {
        const value = row[x];
        if (isDigit(value)) {
            currentNumber += value;
            symbolAdjacent |= nextToSymbolInGrid(x, y, grid);
        } else {
            if (currentNumber !== "" && symbolAdjacent) {
                const n = parseInt(currentNumber);
                numbers.push(n);
                //console.log(n);
                total += n;
            }
            currentNumber = "";
            symbolAdjacent = false;
        }
    }
}
console.log(numbers);
console.log(total);
