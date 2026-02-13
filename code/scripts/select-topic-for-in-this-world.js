/**
 * List of all topics for the "In This World" sections.
 * 
 * Category is postfixed with a colon.
 * After the category there should be 36 topics.
 * 
 */
const topicCharts = `

IDEAS FOR TOPICS:

Art
Pets
Cities
Family
Marriage
Computers
Doctors
Education
Journalism
Elections
Religion
Advertising
Music
Food
Law Enforcement
Zoos
Shopping
Toys
Holidays
Dating
Transportation
Money
Tattoos
Nations
Houses
Government
Libraries
Taxes
Language
Corporations
Clothing
Jobs
Museums
Sports
Recycling
War


WORLD, SOCIETY, AND NATURE:

Seasons
Cemeteries
Internet
Movies
Parks
Insects
Pollution
Weather
Genetics
Roads
Disease
Trees
Guns
Voting
Weapons
Private Property
Songs
Animals
Calendars
Flags
Games
History
Copyright
Units of Measure
Maps
Sculpture
Energy
Schools
Construction
Trade
Inheritance
Camping
Commuting
Writing
Mass Production
Treaties


PROFESSIONS AND WORK:

Banks
Restaurants
Prisons
Military
Publishing
Police
Job Interviews
Resumes
Hackers
Actors
Teachers
Artists
Politicians
Pirates
Theatre
Hospitality
Unemployment
Diplomats
Crime
Farms
Stores
Soldiers
Classrooms
Healthcare
Street Racing
Vacations
Royalty
Private Investigators
Judges
Scientists
Spies
Lawyers
Mining
Hotels
Churches
Meetings


PERSONAL LIVES:

Fashion
Hair
Dolls
Housecleaning
Cats
Puberty
Kitchens
Bathrooms
Eyeglasses
Drugs
Cosmetics
Sleep
Diaries
Cars
Jewelry
Contraceptives
Gardens
Video Games
Credit Cards
Social Media
Reunions
Cocktails
Insurance
Exercise
Romance
Phones
Privacy
Adoption
Weddings
Furniture
Gifts
Cameras
Birthdays
Parties
Books
Neighborhoods


STRANGER AND STRANGER:

Alphabets
Circuses
Poetry
High School
Afterlife
Martial Arts
Puppets
Water
Predators
Prosthetics
Mascots
Xmas
Hunting
Planets
Evolution
Contracts
Dreams
Summer Camp
Roleplaying Games
Gangs
Surgery
Birdwatching
Doors
Death
Gambling
Night
Archaeology
Parades
Storms
Souls
Heraldry
Costumes
Tarot
Astrology
Birth
Musical Instruments


FANTASY AND SCIENCE FICTION:

Dragons
Curses
Prophecy
Castles
Wizards
Tombs
Monsters
Armor
Elves
Treasure
Werewolves
Ghosts
Aliens
Telepathy
Cybernetic Implants
Interstellar Travel
Superheroes
Space Suits
Magic
Priests
Fantasy Races
Gods
the Chosen One
Swords & Sorcery
Robots
UFOs
Colonies
Terraforming
Clones
Alien Abduction
Mecha
the Spice Melange
Space Ships
Androids
Jedi
Time Travel

`;

function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}

function isTopicCategoryTitle(topic) {
    return topic.endsWith(":");
}

const topicLines = topicCharts
    .split("\n")
    .map((topic) => topic.trim())
    .filter((topic) => topic.length > 0);

const topicsArray = topicLines.filter((topic) => !isTopicCategoryTitle(topic));
const categoryArray = topicLines.filter(isTopicCategoryTitle);

function pickRandomTopic() {
    const d1 = rollD6();
    const d2 = rollD6();
    const d3 = rollD6();

    const categoryIndex = d1 - 1;
    const topicIndex = categoryIndex * 6 + (d2 - 1) * 6 + (d3 - 1);

    const topic = topicsArray[topicIndex];
    const category = categoryArray[categoryIndex];

    return { categoryIndex, topicIndex, category, topic };
}

function getTopicByIndex(topicIndex) {
    const topic = topicsArray[topicIndex];

    const categoryIndex = Math.floor(topicIndex / 36);
    const category = categoryArray[categoryIndex];
    return { categoryIndex, topicIndex, category, topic };
}

/**
 * Shuffle an array in place.
 * @param {any[]} array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const parameters = process.argv.slice(2);

if (parameters.includes("--help")) {
    console.log(
        "Usage: node select-topic-for-in-this-world.js [--count] [count]  ",
    );
    console.log("Options:");
    console.log(
        "  --count [count] Select this many random topics (default: 1)",
    );
    process.exit(0);
}

let count = 1;

if (parameters.length === 1) {
    count = parseInt(parameters[0], 10);
}

const countIndex = parameters.indexOf("--count");
if (countIndex !== -1 && countIndex + 1 < parameters.length) {
    count = parseInt(parameters[countIndex + 1], 10);
}

if (count > topicsArray.length) {
    count = topicsArray.length;
}

// All possible options to draw from
// This is used to ensure that we don't pick the same topic multiple times
/**
 * @type {number[]}
 */
const topicOptions = [];
for (let i = 0; i < topicsArray.length; i++) {
    topicOptions.push(i);
}

// randomize the topic options
shuffle(topicOptions);

const randomTopics = [];
while (randomTopics.length < count && topicOptions.length > 0) {
    const topicIndex = topicOptions.pop();
    randomTopics.push(topicIndex);
}

function printTopics(topicIndices) {
    const topics = topicIndices.map((topicIndex) =>
        getTopicByIndex(topicIndex),
    );

    // Order the topics by category
    categoryArray.forEach((category, index) => {
        const categoryTopics = topics
            .filter((topic) => topic.categoryIndex === index)
            .map((topic) => topic.topic);
        if (categoryTopics.length > 0) {
            console.log(`\n\n${category}\n\n${categoryTopics.join("\n")}`);
        }
    });
}

printTopics(randomTopics);
