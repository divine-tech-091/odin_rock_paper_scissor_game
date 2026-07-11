function getComputerChoice() {
	let isChoice = ['rock', 'paper', 'scissors'];
	let random = Math.floor(Math.random() * isChoice.length);
	let computerSelection = isChoice[random];
	return computerSelection;
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
const displayText = document.querySelector('#displayText');
const computerTotalScore = document.querySelector('.computerScore');
const humanTotalScore = document.querySelector('.humanScore');
const showWinner = document.querySelector('.declareTxt');

showWinner.textContent = 'Start Game';

function playRound() {
	rock.addEventListener('click', function (event) {
		let computerSelection = getComputerChoice();
		round++;
		if (round === 5) {
			return totalRound();
		}
		if (event.target.id === 'rock' && computerSelection === 'rock') {
			showWinner.textContent = `It's tie`;
			return;
		} else if (event.target.id === 'rock' && computerSelection === 'scissors') {
			showWinner.textContent = `You win! rock beats ${computerSelection}`;
			humanScore++;
			humanTotalScore.textContent = humanScore;
			return;
		} else {
			showWinner.textContent = `computer win! ${computerSelection} beats rock`;
			computerScore++;
			computerTotalScore.textContent = computerScore;
			return;
		}
	});

	paper.addEventListener('click', function (event) {
		let computerSelection = getComputerChoice();
		round++;
		if (round === 5) {
			return totalRound();
		}
		if (event.target.id === 'paper' && computerSelection === 'paper') {
			showWinner.textContent = `It's tie`;
			return;
		} else if (event.target.id === 'paper' && computerSelection === 'rock') {
			showWinner.textContent = `You win! paper beats ${computerSelection}`;
			humanScore++;
			humanTotalScore.textContent = humanScore;
			return;
		} else {
			showWinner.textContent = `computer win! ${computerSelection} beats paper`;
			computerScore++;
			computerTotalScore.textContent = computerScore;
			return;
		}
	});

	scissor.addEventListener('click', function (event) {
		let computerSelection = getComputerChoice();
		round++;
		if (round === 5) {
			return totalRound();
		}
		if (event.target.id === 'scissors' && computerSelection === 'scissors') {
			showWinner.textContent = `It's tie`;
			return;
		} else if (
			event.target.id === 'scissors' &&
			computerSelection === 'paper'
		) {
			showWinner.textContent = `You win! scissors beats ${computerSelection}`;
			humanScore++;
			humanTotalScore.textContent = humanScore;
			return;
		} else {
			showWinner.textContent = `computer win! ${computerSelection} beats scissors`;
			computerScore++;
			computerTotalScore.textContent = computerScore;

			return;
		}
	});
}
playRound();
function calcScore() {
	if (humanScore > computerScore) {
		showWinner.textContent = `congrats! You're the overall winner! Your score : ${humanScore} | Computer score : ${computerScore}`;
		humanScore = 0;
		computerScore = 0;
		humanTotalScore.textContent = humanScore;
		computerTotalScore.textContent = computerScore;
		round = 0;
		return;
	} else if (computerScore > humanScore) {
		showWinner.textContent = `computer won! try again next time. Your score : ${humanScore} | Computer score : ${computerScore}`;
		humanScore = 0;
		computerScore = 0;
		computerTotalScore.textContent = computerScore;
		humanTotalScore.textContent = humanScore;
		round = 0;
		return;
	} else {
		showWinner.textContent = `Draw Game! play again.Your score ${humanScore} | Computer score ${computerScore}`;
		humanScore = 0;
		computerScore = 0;
		humanTotalScore.textContent = humanScore;
		computerTotalScore.textContent = computerScore;
		round = 0;
		return;
	}
}

function totalRound() {
	if (round === 5) {
		return calcScore();
	}
	return playRound();
}
