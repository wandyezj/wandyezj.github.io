/**
 * This means war simulation
 *
 * What is tracked for each side?
 *
 * Advantage/Disadvantage
 * Position
 * Resources
 * Will
 *
 * Calculation of roll from
 *
 * Round
 * Season
 * Battle Plan
 */

const crypto = require("crypto");

const BattlePlan = {
    Assault: "Assault",
    SurpriseAttack: "Surprise Attack",
    Reinforce: "Reinforce",
    HoldAndFight: "Hold and Fight",
    ForeignAid: "Foreign Aid",
    Diplomacy: "Diplomacy",
    RetreatAndRegroup: "Retreat and Regroup",
};

const dieToBattlePlan = [
    "",
    // 1-2
    BattlePlan.RetreatAndRegroup,
    BattlePlan.RetreatAndRegroup,
    // 3
    BattlePlan.Diplomacy,
    // 4
    BattlePlan.ForeignAid,
    // 5-6
    BattlePlan.HoldAndFight,
    BattlePlan.HoldAndFight,
    // 7
    BattlePlan.Reinforce,
    // 8
    BattlePlan.SurpriseAttack,
    // 9-10
    BattlePlan.Assault,
    BattlePlan.Assault,
];

const DiplomaticTone = {
    Threats: "Threats, accusations, ultimatums",
    Negotiation: "Demands, negotiation",
    Concessions: "Conciliatory offers, concessions",
};

const dieToDiplomaticTone = [
    "",
    // 1-2
    DiplomaticTone.Concessions,
    DiplomaticTone.Concessions,
    // 3-6
    DiplomaticTone.Negotiation,
    DiplomaticTone.Negotiation,
    DiplomaticTone.Negotiation,
    // 7-10
    DiplomaticTone.Threats,
    DiplomaticTone.Threats,
    DiplomaticTone.Threats,
    DiplomaticTone.Threats,
];

/**
 * resources ranges from -16 to 16
 *
 * 14 to 16 -> +2
 * 7 to 13 -> +1
 * -4 to 6 -> 0
 * -5 to -11 -> -1
 * -12 to -16 -> -2
 *
 * @param {number} resources
 * @returns
 */
function resourceToDieChange(resources) {
    if (resources >= 14) {
        return 2;
    }

    if (resources >= 7) {
        return 1;
    }

    if (resources <= -12) {
        return -2;
    }

    if (resources <= -5) {
        return -1;
    }

    return 0;
}

function printResourceToDieChange() {
    console.log("Resources, Die Change");
    for (let i = -16; i <= 16; i++) {
        console.log(`${i}, ${resourceToDieChange(i)}`);
    }
}

/**
 * Do we take high or low of a set of dice rolls
 * @enum {string}
 */
const DieSetDirection = {
    High: "High",
    Low: "Low",
};

/**
 * Roll a die
 * @param {number} sides 1+
 * @returns {number}
 */
function rollDie(sides) {
    // Generates a secure random integer between 0 (inclusive) and sides (exclusive)
    const roll = crypto.randomInt(0, sides) + 1;
    return roll;
}

/**
 * 
 * @template T
 * @param {Array<T>} array 
 * @returns {Array<T>} - A new array with the elements shuffled
 */
function shuffle(array) {
  // Create a shallow copy of the array
  const shuffled = [...array]; 
  
  // Iterate backwards through the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = crypto.randomInt(0, i + 1);

    
    // Swap elements using destructuring assignment
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

/**
 * 
 * @returns {boolean}
 */
function coinToss() {
    return crypto.randomInt(0, 2) === 0;
}

/**
 *
 * @param {number} dieCount - The number of dice to roll
 * @param {number} sides - The number of sides on each die
 * @returns {number[]} - An array of dice rolls
 */
function rollDiceSet(dieCount, sides) {
    return Array.from({ length: dieCount }, () => rollDie(sides));
}

/**
 * Rolls d10
 * @param {number} dieCount - The number of dice to roll
 * @param {DieSetDirection} direction - take high or low dice
 * @returns {number}
 */
function takeDie(rolls, direction) {
    if (direction === DieSetDirection.High) {
        return Math.max(...rolls);
    }

    if (direction === DieSetDirection.Low) {
        return Math.min(...rolls);
    }

    throw new Error("Invalid die set direction");
}

/**
 * Rolls d10
 * @param {number} dieCount - The number of dice to roll
 * @param {DieSetDirection} direction - take high or low dice
 * @returns {number}
 */
function rollDice(dieCount, direction) {
    const dice = rollDiceSet(dieCount, 10);
    return takeDie(dice, direction);
}

function printTakeDieSet() {
    console.log("Rolls -> High, Low");

    for (let i = 1; i <= 10; i++) {
        const dice = rollDiceSet(3, 10);
        const pickLow = takeDie(dice, DieSetDirection.Low);
        const pickHigh = takeDie(dice, DieSetDirection.High);
        console.log(`${dice} -> ${pickLow}, ${pickHigh}`);
    }
}

/**
 * The season of battle
 * @enum {string}
 */
const Season = {
    Spring: "Spring",
    Summer: "Summer",
    Autumn: "Autumn",
    Winter: "Winter",
};

const SeasonOrder = [
    Season.Spring,
    Season.Summer,
    Season.Autumn,
    Season.Winter,
];

//Name, Start Modifier Will, Start Modifier Resources, Year End Modifier Will, Year End Modifier Resources
// N, Ws, Rs, Wy, Ry
// Strengths are positive, weaknesses are negative

// STRENGTHS
const nationStrengthText = `
Unified People,     3, 0, 2, 0
Strong Industry,    0, 3, 0, 2
Wealthy,            2, 2, 0, 1
Prepared for War,   2, 2, 0, 0
Natural Resources,  0, 2, 0, 1
Natural Defenses,   2, 0, 0, 0
Past Grievance,     3, 0, 1, 0
`;

// WEAKNESSES
const nationWeaknessText = `
Divided People,     -2, 0, -2, 0
Weak Industry,       0, -2, 0, -2
Poor,               -1, -1, 0, -1
Unprepared for War,  -2, -2, 0, 0
Sparse Resources,     0, -1, 0, -1
Broad Borders,       -1, 0, 0, 0
Past Sins,           -2, 0, -1, 0
`.trim();

/**
 * A nations traits and modifiers
 */
class NationTrait {
    /**
     * @type {string}
     * @readonly
     */
    name;

    /**
     * @type {number}
     * @readonly
     */
    modifyStartWill;

    /**
     * @type {number}
     * @readonly
     */
    modifyStartResources;

    /**
     * @type {number}
     * @readonly
     */
    modifyYearEndWill;

    /**
     * @type {number}
     * @readonly
     */
    modifyYearEndResources;

    /**
     * Traits have a name look up other values
     * @param {{ name: string, modifyStartWill: number, modifyStartResources: number, modifyYearEndWill: number, modifyYearEndResources: number }} name
     */
    constructor({
        name,
        modifyStartWill,
        modifyStartResources,
        modifyYearEndWill,
        modifyYearEndResources,
    }) {
        this.name = name;
        this.modifyStartWill = modifyStartWill;
        this.modifyStartResources = modifyStartResources;
        this.modifyYearEndWill = modifyYearEndWill;
        this.modifyYearEndResources = modifyYearEndResources;
    }
}

/**
 *
 * @param {string} text
 * @returns {NationTrait[]}
 */
function parseNationTraits(text) {
    return text
        .trim()
        .split("\n")
        .map((line) => {
            const [
                name,
                startWill,
                startResources,
                yearEndWill,
                yearEndResources,
            ] = line.split(",").map((s) => s.trim());
            return new NationTrait({
                name,
                modifyStartWill: Number.parseInt(startWill),
                modifyStartResources: Number.parseInt(startResources),
                modifyYearEndWill: Number.parseInt(yearEndWill),
                modifyYearEndResources: Number.parseInt(yearEndResources),
            });
        });
}

/**
 * All strength traits
 */
const nationTraitStrengths = parseNationTraits(nationStrengthText);

/**
 * All weakness traits
 */
const nationTraitWeaknesses = parseNationTraits(nationWeaknessText);

if (nationTraitStrengths.length !== nationTraitWeaknesses.length) {
    throw new Error("Mismatched number of strength and weakness traits");
}

/**
 * Generate Strength and Weakness trait pairs for nation a and b
 */
function getNationTraits() {
    let options = [];
    for (let i =0; i< nationTraitStrengths.length; i++ ) {
        options.push(i);
    }

    options = shuffle(options);
    console.log(options);

    // One Shared Trait and two unshared traits, all from different categories
    const shared = options.pop();
    const otherA = options.pop();
    const otherB= options.pop();

    // Share a strength or a weakness
    if (coinToss()) {
        // Shared is a strength
        const strength = nationTraitStrengths[shared]

        return {
            a: {
                strength,
                weakness: nationTraitWeaknesses[otherA]
            },
            b: {
                strength,
                weakness: nationTraitWeaknesses[otherB]
            }
        };
    } else {
        // Shared is a weakness
        const weakness = nationTraitWeaknesses[shared];

        return {
            a: {
                strength: nationTraitStrengths[otherA],
                weakness,
            },
            b: {
                strength: nationTraitStrengths[otherB],
                weakness,
            }
        };
    }

}

function getStartWillOrResource() {
    const roll = rollDie(10);
    return roll >= 8 ? 8 : 7;
}

console.log("This Means War");
printResourceToDieChange();
printTakeDieSet();
console.log(getNationTraits());

// Side Setup

// Pick Starting Advantage and Disadvantage
// Set Initial Resources and Will

class Nation {
    /**
     * Nation name
     * @type {string} name
     * @readonly
     */
    name = "";

    /**
     * Nation strength
     * @type {NationTrait}
     * @readonly
     */
    strength;

    /**
     * Nation weakness
     * @type {NationTrait}
     * @readonly
     */
    weakness;

    /**
     * Nation will
     * @type {number}
     * @readonly
     */
    startBaseWill = 0;

    /**
     * Nation resources
     * @type {number}
     * @readonly
     */
    startBaseResources = 0;

    /**
     * @returns {number}
     * @readonly
     */
    startResources = 0;

    /**
     * @returns {number}
     * @readonly
     */
    startWill = 0;

    // /**
    //  * @type {number}
    //  */
    // position = 0;

    /**
     *
     * @param {{name: string, weakness: NationTrait, strength: NationTrait}} param0
     */
    constructor({ name, weakness, strength }) {

        this.name = name;

        this.weakness = weakness;
        this.strength = strength;

        this.startBaseWill = getStartWillOrResource();
        this.startBaseResources = getStartWillOrResource();

        // Figure out start from base value + weakness and strength.
        // Add modifier from weakness and strength
        this.startResources =
            this.startBaseResources +
            this.strength.modifyStartResources +
            this.weakness.modifyStartResources;

        this.startWill =
            this.startBaseWill +
            this.strength.modifyStartWill +
            this.weakness.modifyStartWill;
    }
}

/**
 * The Waracle runs wars
 */
class Waracle {
    /**
     * @type {Nation}
     */
    nationA;

    /**
     * @type {Nation}
     */
    nationB;

    constructor() {
        this.nationA = new Nation({ name: "A" });
        this.nationB = new Nation({ name: "B" });
    }
}

// Setup

// Pick Trait Shared
//  - Strength or Weakness
// Pick Trait Individual
// - If share a strength, pick individual weaknesses
// - reroll if picking same trait as the shared

// Run Turn
// Either Battle or Peace

// Run out of Will or Position or Resources war is over!
