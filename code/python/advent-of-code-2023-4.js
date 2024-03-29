
let data = ``;

data = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`;


const lines = data.trim().split("\n");

const cards = lines.map((line) => {
    const [name, others] = line.split(":");
    const id = parseInt(name.split(" ")[1].trim());
    const [win, have] = others
        .split("|")
        .map((n) => n.trim().split(" ").filter((n) => n !== ""))
        .map((n) => n.map((n) => parseInt(n.trim(), 10)));

    const wins = have.filter((n) => win.includes(n));
    const winCount = wins.length;
    const score = Math.floor(2 ** (winCount - 1));

    return { name, id, win, have, wins, score };
});

//cards.forEach((card) => console.log(`${card.id}: ${card.win} | ${card.have} = ${card.wins} ${card.score}`));

const total = cards.reduce((acc, card) => acc + card.score, 0);
console.log(total);


// Count the total number of scratch cards

// so need to keep track of the number of cards each card generates, memoize
// go down the tree of cards memoizing all the way
// this is a tree search problem with DFS
// map cards to wins

const memo = [];

