// Task 1:
// Build a "Player Class" for a mini RPG:
// Properties: name, health, inventory (array)

// Methods:
// attack() → Logs “{name} attacks!”
// addItem(item) → Adds to inventory
// get status() → Returns {name, health, items}
// Use: class, get, this.

// Task 2:
// Create a "Monster" subclass that inherits from Player and has:
// roar() → Logs “ROAR!”
// Override attack() → “{name} SLASHES!”

// MAKING CLASS
class Player {
	// MAKING CONSTRUCTOR METHOD WITH PROPERTIES
	constructor(name, health, inventory = []) {
		this.name = name;
		this.health = health;
		this.inventory = inventory;
	}

	// MAKING INSTANCE METHODS:
	attack() {
		console.log(`${this.name} attacks!`);
	}

	addItem(item) {
		this.inventory.push(item);
	}

	// "get" used to access a property like it's a variable
	get status() {
		return { name: this.name, health: this.health, items: this.inventory };
	}
}

// Access class by using "new" to create an instance
const player1 = new Player("Steve", 50, ["iron axe", "water bucket"]);

console.log(player1.name);
console.log(player1.health);

// Making a "Monster" subclass that inherits from the "Player" class
class Monster extends Player {
	constructor(name, health, inventory = []) {
		super(name, health, inventory);
	}

	roar() {
		console.log("ROAR!");
	}

	attack() {
		console.log(`${this.name} SLASHES!`);
	}
}

let zombie = new Monster("Zombie", 20, ["rotten flesh"]);

zombie.roar();
zombie.attack();
player1.attack();
player1.addItem("rotten flesh");
console.log(player1.inventory);
