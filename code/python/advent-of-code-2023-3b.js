let data = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

// How to approach?
// parse out the numbers
// parse out positions of the numbers
// parse out positions of symbols

const lines = data.trim().split("\n");
const grid = lines.map((line) => line.split(""));

function isDigit(value) {
    return value >= "0" && value <= "9";
}

function isGear(value) {
    return value === "*";
}

function getItemInGrid(x, y, grid) {
    if (y >= grid.length || y < 0) {
        return undefined;
    }
    let row = grid[y];
    if (x >= row.length || x < 0) {
        return undefined;
    }
    const value = row[x];
    return value;
}

const indices = [
    // x y
    [1, 0], // right
    [-1, 0], // left

    [0, 1], // below
    [0, -1], // above

    [1, 1], // right below
    [-1, -1], // left above
    [-1, 1], // left below
    [1, -1], // right above
];

function nextToSymbolInGrid(x, y, grid) {

    const nextTo = getOffsets(x, y, indices);
    for (const [x, y] of nextTo) {
        const value = getItemInGrid(x, y, grid);
        if (value !== undefined && isSymbol(value)) {
            return true;
        }
    }

    return false;
}


function getOffsets(x, y, offsets) {
    return offsets.map(([dx, dy]) => [x + dx, y + dy]);
}

// go through the grid getting all of the numbers

// Gear Ratios
// find all of the gears '*'
// search around the gears for digits
// parse out the numbers
// check that there are only distinct numbers

// or 
// parse out all gear positions
// parse out all number positions
// find where the numbers are next to the gears
// numbers start xy and length (or just all positions that are occupied)
// gears xy
// to test if a gear is next to a number check if the gear xy shows up in the numbers set of xy

/**
 * array of all possible numbers
 * (x,y)[] all xy coordinates of the number
 * [] all the number
 * @type {[number, number][][]}
 */
const numbers = []

/**
 * [x,y] all xy coordinates of the gears
 * @type {[number, number][]}
 */
const gears = [];


// go through each row
for (let y = 0; y < grid.length; y++) {
    const row = grid[y];

    // go through each column
    let currentNumber = [];
    for (let x = 0; x < row.length; x++) {
        const value = row[x];

        if (isGear(value)) {
            gears.push([x, y]);
        }

        if (isDigit(value)) {
            currentNumber.push([x, y]);
        } else if (currentNumber.length > 0){
            numbers.push(currentNumber);
            currentNumber = [];
        }
    }

    if (currentNumber.length > 0) {
        numbers.push(currentNumber);
    }
}

// determine intersections and gear ratios

function getValuesAtIndices(indices, grid) {
    return indices.map(([x, y]) => getItemInGrid(x, y, grid));
}

let total = 0;
for (const [gearX, gearY] of gears) {
    const adjacentIndices = getOffsets(gearX, gearY, indices);

    const numberIndexHit = [];
    for (const [x, y] of adjacentIndices) {
        for (let n = 0; n< numbers.length; n++) {
            if (numbers[n].some(([nx, ny]) => nx === x && ny === y)) {
                if (!numberIndexHit.includes(n)) {
                    numberIndexHit.push(n);
                }
                
                break;
            }
        }
    }


    if (numberIndexHit.length === 2) {
        // calculate gear ratio
        //console.log(numberIndexHit);
        const [a,b] = numberIndexHit.map((n) => getValuesAtIndices(numbers[n], grid).join(""));
        //console.log(a, b);
        total += parseInt(a) * parseInt(b);
    }


}



console.log(total);


