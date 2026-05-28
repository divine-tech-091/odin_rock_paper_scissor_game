// playRound
let humanScore = 0;
let computerScore = 0;

function playRound() {
	for (let round = 1; round <= 5; round++) {
		//
		let isChoice = ['rock', 'paper', 'scissors'];
		let random = Math.floor(Math.random() * isChoice.length);
		let computerSelection = isChoice[random];

		let humanSelection = prompt('Input your choice');
		if (
			humanSelection === 'rock' ||
			humanSelection === 'Rock' ||
			humanSelection === 'ROCK'
		) {
			humanSelection = 'rock';
		}

		if (
			humanSelection === 'paper' ||
			humanSelection === 'Paper' ||
			humanSelection === 'PAPER'
		) {
			humanSelection = 'paper';
		}

		if (
			humanSelection === 'scissors' ||
			humanSelection === 'Scissors' ||
			humanSelection === 'SCISSORS'
		) {
			humanSelection = 'scissors';
		}

		console.log(
			`Round ${round} You choose ${humanSelection}, computer choose ${computerSelection}`,
		);

		if (humanSelection === computerSelection) {
			console.log(`It's a tie!`);
		} else if (
			(humanSelection === 'rock' && computerSelection === 'scissors') ||
			(humanSelection === 'paper' && computerSelection === 'rock') ||
			(humanSelection === 'scissors' && computerSelection === 'paper')
		) {
			console.log(
				`You win! this round. ${humanSelection} beats ${computerSelection}`,
			);
			humanScore++;
		} else {
			console.log(
				`Computer win! this round. ${computerSelection}  beats ${humanSelection}`,
			);
			computerScore++;
		}

		console.log(
			`human score : ${humanScore} | computer score : ${computerScore}`,
		);
		if (humanScore > computerScore) {
			console.log(`Congratulations! You are overall winner`);
		} else if (computerScore > humanScore) {
			console.log(`computer wins the game, try hard next time`);
		} else {
			console.log(`Draw game`);
		}
	}
}
playRound();

// function playGame(play) {}
// playGame();
