// Project
// Command Line Interface (CLI) Bank Account Simulator

// Importing prompt-sync to take user input in the terminal
const prompt = require("prompt-sync")({ sigint: true });

// Welcome message
console.log("Welcome To The Coder's Bank!");

// Ask user if they want to start banking
let wannaProceed = prompt(
	"Type 'y' to start banking or type 'n' to exit: "
).toLowerCase();

// Declare variables to hold state
let accountHolderName;
let operation;
let programStarted = true;
let wannaContinue;

// Define the bank account object with balance and transaction history
let bankAccount = {
	balance: 0, // Initial account balance
	transactions: [], // To store all transaction logs

	// Deposit method: adds money to balance and logs the transaction
	deposit(amount) {
		if (amount <= 0) {
			return "Amount should be greater than 0.";
		}
		this.balance += amount;
		this.transactions.push(
			` Deposit: $${amount} | New Balance: $${this.balance}`
		);
		return "Money deposited successfully.";
	},

	// Withdraw method: subtracts from balance if sufficient funds exist
	withdraw(amount) {
		if (this.balance < amount) {
			return "Insufficient bank balance.";
		}
		this.balance -= amount;
		this.transactions.push(
			` Withdrawal: $${amount} | New Balance: $${this.balance}`
		);
		return "Money withdrawal successfully.";
	},

	// Get current balance
	getBalance() {
		return `Total Available Balance: $${this.balance}`;
	},

	// Get full transaction history
	getTransactionHistory() {
		if (this.transactions.length === 0) {
			return "No Transaction History Found!";
		}
		return `Transaction History: ${this.transactions}`;
	},
};

// If user declines to start, exit early
if (wannaProceed !== "y") {
	console.log("Okay, may be later!");
} else {
	// Get user's name to personalize experience
	accountHolderName = prompt("Enter your name: ");
	console.log("");
	console.log(`Welcome ${accountHolderName}!`);
	console.log(
		"Services we provide: money deposit(d) / money withdraw(w) / check balance(c) / transaction history(h)"
	);

	// Main banking loop
	while (programStarted) {
		// Ask user to choose an operation
		operation = prompt("Choose your operation: d/w/c/h ").toLowerCase();

		if (operation === "d") {
			// Deposit money
			bankAccount.deposit(
				Number(prompt("Enter the amount to deposit: $"))
			);
		} else if (operation === "w") {
			// Withdraw money
			bankAccount.withdraw(
				Number(prompt("Enter the amount to withdraw: $"))
			);
		} else if (operation === "c") {
			// Display current balance
			console.log(bankAccount.getBalance());
		} else if (operation === "h") {
			// Display transaction history
			console.log(bankAccount.getTransactionHistory());
		} else {
			// Invalid operation
			console.log(
				"Problem while processing your request due to invalid input."
			);
		}

		console.log(""); // Blank line for better spacing in terminal

		// Ask if user wants to continue or exit
		wannaContinue = prompt(
			"Type 'y' to continue banking or type 'n' to exit: "
		).toLowerCase();

		if (wannaContinue !== "y") {
			programStarted = false; // Exit loop
			console.log("Thanks for visiting!");
		}
	}
}
