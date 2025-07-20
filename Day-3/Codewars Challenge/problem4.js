// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
	let seenChar = [];
	for (let i = 0; i < str.length; i++) {
		if (seenChar.includes(str[i].toLowerCase())) {
			return false;
		} else {
			seenChar.push(str[i].toLowerCase());
		}
	}
	return true;
}

let result = isIsogram("moOse");
console.log(result);
