// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
	console.log('HELLO:', i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
	console.log('HELLO:', i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
console.log('AFTER THE LOOP!');

//This is an feat 1

for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP:', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('  INNER LOOP', j);
	}
}

// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	//inner loop iterates over each cell in a given row
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}

//This is feat 2

// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

//This is feat 9. For....Of intro

let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
	console.log(sub);
}
//Works with other iterables, like strings!
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}

//This is feat 10. Comparing For and For...Of

const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	//Access index i of both arrays
	console.log(`${words1[i]}${words2[i]}`);
}

//This is feat 11. For...Of with Objects

const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);

//This is feat 12. For...In Loops

const jeopardyWinnings =  {
    regularPlay     : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades : 100000
};

for (let prop in jeopardyWinnings){
    console.log(prop);
    console.log(jeopardyWinnings[prop]);  
}

let total = 0;
for (let prop in jeopardyWinnings){
    total += jeopardyWinnings[prop];
}