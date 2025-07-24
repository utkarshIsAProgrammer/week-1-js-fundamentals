// Project
// Pokemon Trainer Simulator

const prompt = require("prompt-sync")({ sigint: true });

class Trainer {
	constructor(name) {
		this.name = name;
		this.pokemons = [];
		this.items = ["pokeball", "instant heal potion"];
	}

	catchPokemon(pokemon) {
		this.pokemons.push(pokemon);
		console.log(`${this.name} caught ${pokemon.name}!`);
	}

	get TeamSize() {
		return `${this.name}'s team has ${this.pokemons.length} pokemons.`;
	}

	get StrongestPokemon() {
		if (this.pokemons.length === 0) return "You don't have a pokemon!";
		const strongest = this.pokemons.reduce((max, current) => {
			return current.HP > max.HP ? current : max;
		});

		return `${strongest.name} is the strongest Pokemon with ${strongest.HP} HP.`;
	}

	battle() {
		if (this.pokemons.length === 0) {
			return "No pokemons left to battle!";
		}
		const fighter =
			this.pokemons[Math.floor(Math.random() * this.pokemons.length)];
		fighter.attack();
	}
}

class Pokemon {
	constructor(name, type, HP) {
		this.name = name;
		this.type = type;
		this.HP = HP;
	}

	attack() {
		const moves = [
			"Thunderbolt",
			"Quick Attack",
			"Iron Tail",
			"Thunder Breeze",
			"Cold Mist",
		];
		const move = moves[Math.floor(Math.random() * moves.length)];
		console.log(`${this.name} uses ${move}!`);
	}
}

const trainer = new Trainer(
	prompt("Welcome to the Pokemon World! What's your name? : ")
);

while (true) {
	console.log(`
Here You Can.....\n
1. Catch a Pokémon
2. View Team Size
3. View Strongest Pokémon
4. Battle Random Pokémon
5. Quit
	`);

	const choice = prompt("Choose an action (1 to 5): ");

	if (choice === "1") {
		const name = prompt("Enter Pokémon name: ");
		const type = prompt("Enter Pokémon type: ");
		const hp = Number(prompt("Enter Pokémon HP (1 to 100): "));
		trainer.catchPokemon(new Pokemon(name, type, hp));
	} else if (choice === "2") {
		console.log(trainer.TeamSize);
	} else if (choice === "3") {
		console.log(trainer.StrongestPokemon);
	} else if (choice === "4") {
		trainer.battle();
	} else if (choice === "5") {
		console.log("Thanks for playing! See you next time!");
		break;
	}
}
