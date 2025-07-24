class BankAccount {
	constructor(balance) {
		this._balance = balance; // "_" means "private" (convention)
	}
	// GETTER: lets you do `account.balance` instead of `account._balance`
	get balance() {
		return this._balance;
	}
	// SETTER: prevents negative balances
	set balance(amount) {
		if (amount < 0) throw new Error("Can’t be negative!");
		this._balance = amount;
	}
}
const account = new BankAccount(100);
account.balance = 50; // Works (uses setter)
account.balance = -10; // Throws error (setter protects)
