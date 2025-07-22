// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

function arrayDiff() {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			return a.filter((a, b) => {
				a[i] === b[j];
			});
		}
	}
}

let result = arrayDiff((a = [1, 2, 2, 2, 3]), (b = [2]));
console.log(result);
