// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad ic+s 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function getAlphabetIndex(char) {
	return char.toLowerCase().charCodeAt(0) - 96;
}

function high(x) {
	let wordArray = x.split(" ");
	let highestScore = 0;
	let highestScoringWord = "";

	for (let word = 0; word < wordArray.length; word++) {
		let score = 0;
		for (let char = 0; char < wordArray[word].length; char++) {
			let charIndex = getAlphabetIndex(wordArray[word][char]);
			score += charIndex;
		}
		if (highestScore < score) {
			highestScore = score;
			highestScoringWord = wordArray[word];
		}
	}
	return highestScoringWord;
}

let result = high("hell abad zn bcd");
console.log(result);
