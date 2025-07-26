// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.

// NOTE:
// All letters will be lowercase and all inputs will be valid.

let alphabets = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

function high(x) {
	let splitWords = x.split(" ");
	let highestScore = 0;
	let highestScoreWord = "";

	for (let i = 0; i < splitWords.length; i++) {
		let score = 0;
		let index;
		for (let j = 0; j < splitWords[i].length; j++) {
			index = alphabets.indexOf(splitWords[i][j]) + 1;
			score += index;
		}
		if (score > highestScore) {
			highestScore = score;
			highestScoreWord = splitWords[i];
		}
	}
	return highestScoreWord;
}

let result = high("abad bbc");
console.log(result);
