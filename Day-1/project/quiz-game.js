// Project
// Command Line Interface (CLI) Quiz Game

// Importing Prompt
const prompt = require("prompt-sync")({ sigint: true });

// Quiz Questions
questions = {
	"What is the capital of France?": "Paris",
	"Which Planet is known as the red planet?": "Mars",
	"What is the chemical symbol for water?": "H2O",
	"Who wrote the play Romeo and Juliet?": "William Shakespeare",
	"What is the largest ocean on Earth?": "Pacific Ocean",
	"Which famous scientist developed the theory of relativity?":
		"Albert Einstein",
	"In which year did the first human land on the moon?": "1969",
	"What is the hardest natural substance on Earth?": "Diamond",
	"Which organ pumps blood throughout the human body?": "Heart",
	"What is the primary gas that makes up the Earth's atmosphere?": "Nitrogen",
};

// Function to start quiz
function playGame() {
	let score = 0;
	let keys = Object.keys(questions);
	let values = Object.values(questions);
	let userChoice;

	console.log("Welcome To The Quiz Game!");

	for (let i = 0; i < 10; i++) {
		userChoice = prompt(`Q.${i + 1} ${keys[i]} `).toLowerCase();
		if (userChoice.toLowerCase() === values[i].toLowerCase()) {
			score += 1;
			console.log(`Correct Answer! Score: ${score}`);
		} else {
			console.log(`Wrong Answer! Score: ${score}`);
			console.log(`The correct answer was ${values[i]}.`);
		}
	}
	console.log(`Your final score is ${score}.`);
}

let wannaPlay = prompt("Do you wanna start quiz? y/n ").toLowerCase();
if (wannaPlay === "y") {
	playGame();
} else {
	console.log("Ok, maybe next time!");
}
