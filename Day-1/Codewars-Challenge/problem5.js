// Rock Paper and Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
	return (p1 === "rock" && p2 === "paper") ||
		(p1 === "paper" && p2 === "scissors") ||
		(p1 === "scissors" && p2 === "rock")
		? "Player 2 won!"
		: p1 === p2
		? "Draw!"
		: "Player 1 won!";
};
