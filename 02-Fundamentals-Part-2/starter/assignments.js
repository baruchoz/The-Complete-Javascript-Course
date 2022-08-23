'use-strict';

// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital is ${capitalCity}. \n`
};
const descUSA = describeCountry('USA', 300, 'Washington DC');
const descIsrael = describeCountry('Israel', 9, 'Jerusalem');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
const descEngland = describeCountry('England', 56, 'London');
console.log(descUSA, descIsrael, descFinland);

// Function Declarations vs. Expressions
// Function Declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100
};
console.log(percentageOfWorld1(300));
console.log(percentageOfWorld1(9));
console.log(percentageOfWorld1(6));
console.log(percentageOfWorld1(56));

// Function Expression
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100
};
console.log(percentageOfWorld2(300));
console.log(percentageOfWorld2(9));
console.log(percentageOfWorld2(6));
console.log(percentageOfWorld2(56));

// Arrow functions
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(300));
console.log(percentageOfWorld3(9));
console.log(percentageOfWorld3(6));
console.log(percentageOfWorld3(56));

// Functions Calling Other Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};
describePopulation('USA', 300)
describePopulation('ISrael', 9)
describePopulation('Finland', 6)
describePopulation('England', 56)

// Introduciton to Arrays
const populations = [300, 9, 6, 56];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages)

// Basic Array Operations (Methods)

const neighbours = ['Lebanon', 'Syriah', 'Jordan', 'Egypt'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D')
};

// console.log(neighbours.indexOf('Jordan'));
// neighbours[2] = 'Jordanian Republic';
// or a better way
neighbours[neighbours.indexOf('Jordan')] = 'Jordanian Republic';
neighbours[neighbours.indexOf('Lebanon')] = 'Cyprus'
console.log(neighbours)


// Intorduction to objects
const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew', 
    population: 9,
    neighbours: ['Lebanon', 'Syriah', 'Jordan', 'Egypt']
};


// Dot vs Bracket Notation
console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


// Object Methods
const myCountry2 = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew', 
    population: 9,
    neighbours: ['Lebanon', 'Syriah', 'Jordan', 'Egypt'],

    describe: function() {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        );
    },

    checkIsIsland: function() {
        // this.isIsland = !this.neighbours.length ? true : false;
    //or
        // this.isIsland = this.neighbours.length === 0 ? true : false;
    //or
        this.isIsland = !Boolean(this.neighbours.length);
    }
};

myCountry2.describe();
myCountry2.checkIsIsland();
console.log(myCountry2)

// Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`)
};

// Looping Arrays, Breaking and Continuing
const populations2 = [300, 9, 6, 56];
const percentages2 = [];
for (i = 0; i < populations2.length; i++) {
    const p = percentageOfWorld1(populations2[i]);
    percentages2.push(p);
};
console.log(percentages2)

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]); 
    percentages3.push(perc);
    i++;
}
console.log(percentages3);