let isRandom = Math.random();
let humanScore = 0;
let computerScore = 0;

// Computer choice
let getComputerChoice = function () {
	if (isRandom >= 0 && isRandom < 1 / 2) {
		console.log('Rock');
	} else if (isRandom >= 1 / 2 && isRandom < 2 / 3) {
		console.log('Paper');
	} else if (isRandom >= 2 / 3 && isRandom < 1) {
		console.log('Scissor');
	}
};
getComputerChoice();

// Human Choice
let getHumanChoice = function () {
	let UserInput = prompt('Input your choice');

	if (UserInput === 'rock') {
		console.log('Rock beats scissor');
	} else if (UserInput === 'paper') {
		console.log('Scissor beats paper');
	} else if (UserInput === 'scissor') {
		console.log('Paper beats rock');
	}
};
getHumanChoice();
