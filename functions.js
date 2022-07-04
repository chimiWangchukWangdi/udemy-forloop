//This is 1. Our First Function

//STEP 1: Define the function:
function grumpus() {
	console.log('ugh...you again...');
	console.log('FOR THE LAST TIME...');
	console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();

for (let i = 0; i < 50; i++) {
	grumpus();
}

//This is 2. Roll Dice Function

// Define our first function
function rollDie() {
	// Pick a random number from 1-6
	// - Math.random() gives us a decimal from 0-1
	// - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
	// - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
	//- Lastly we add one, to get a number between 1 and 6
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function throwDice() {
	rollDie();
	rollDie();
	rollDie();
	rollDie();
	rollDie();
	rollDie();
}

//Call it!
throwDice();

//This is 3. Intro to Arguments

function greet() {
	console.log('Hi');
}

//greet now expects a single argument
function greet(nickname) {
	console.log(`Hi, ${nickname}!`);
}
greet('Sansa');
greet('Ramsay');

// EXAMPLE 2
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
// We can now specify how many dice to roll!
function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

throwDice(2);
throwDice(6);
