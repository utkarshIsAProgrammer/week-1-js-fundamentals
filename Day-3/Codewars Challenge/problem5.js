// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
	let strLength = s.length;
	for (let i = 0; i < strLength; i++) {
		if (strLength % 2 !== 0) {
			return s[(strLength + 1) / 2 - 1];
		}
	}
	return `${s[Math.floor((strLength / 2 + (strLength / 2 + 1)) / 2 - 1)]}${
		s[Math.floor((strLength / 2 + (strLength / 2 + 1)) / 2)]
	}`;
}

let result = getMiddle("animal");
console.log(result);

// odd  = n+1/2
// even = [(n/2)th term + (n/2 + 1)th term]/2
