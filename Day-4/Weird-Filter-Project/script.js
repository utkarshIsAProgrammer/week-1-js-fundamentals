// Project
// Weird Filter Project
// Goal: Build a CLI app that filters palindrome words using .filter() + .map()

// Importing the prompt-sync module for CLI input
const prompt = require("prompt-sync")({ sigint: true });

// Function to filter palindrome words from the input array
function weirdFilter(words) {
	return words.filter((word) => {
		let reverseWord = "";

		// Reversing the word manually using a loop
		for (let i = word.length - 1; i >= 0; i--) {
			reverseWord += word[i];
		}

		// Check if the original word matches the reversed word
		return word === reverseWord;
	});
}

// Taking user input as a string and splitting it into an array of words
let result = weirdFilter(
	prompt("Enter some words to check palindrome: ").split(" ")
);

// If at least one palindrome is found
if (result.length > 0) {
	console.log(
		`Palindrome Found: ${result
			.map((palindromeWord) => palindromeWord.toUpperCase()) // Convert to UPPERCASE using .map()
			.join(", ")}` // Join the array into a string with commas
	);
} else {
	// If no palindrome found
	console.log("Palindrome Not Found!");
}
