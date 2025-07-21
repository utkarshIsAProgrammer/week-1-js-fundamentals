// Project
// Command Line Interface (CLI) Bank Account Simulator

const prompt = require("prompt-sync")({ sigint: true });

console.log("Welcome To The Coder's Bank!");

let wannaProceed = prompt(
	"Type 'y' to start banking or type 'n' to exit: "
).toLowerCase();

let accountHolderName;
let operation;
let programStarted = true;
let wannaContinue;

let bankAccount = {
	balance: 0,
	transactions: [],

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

	getBalance() {
		return `Total Available Balance: $${this.balance}`;
	},

	getTransactionHistory() {
		if (this.transactions.length === 0) {
			return "No Transaction History Found!";
		}

		return `Transaction History: ${this.transactions}`;
	},
};

if (wannaProceed !== "y") {
	console.log("Okay, may be later!");
} else {
	accountHolderName = prompt("Enter your name: ");
	console.log("");
	console.log(`Welcome ${accountHolderName}!`);
	console.log(
		"Services we provide: money deposit(d) / money withdraw(w) / check balance(c) / transaction history(h)"
	);

	while (programStarted) {
		operation = prompt("Choose your operation: d/w/c/h ").toLowerCase();
		if (operation === "d") {
			bankAccount.deposit(
				Number(prompt("Enter the amount to deposit: $"))
			);
		} else if (operation === "w") {
			bankAccount.withdraw(
				Number(prompt("Enter the amount to withdraw: $"))
			);
		} else if (operation === "c") {
			console.log(bankAccount.getBalance());
		} else if (operation === "h") {
			console.log(bankAccount.getTransactionHistory());
		} else {
			console.log(
				"Problem while processing your request due to invalid input."
			);
		}

		console.log("");
		wannaContinue = prompt(
			"Type 'y' to continue banking or type 'n' to exit: "
		).toLowerCase();

		if (wannaContinue !== "y") {
			programStarted = false;
			console.log("Thanks for visiting!");
		}
	}
}
