// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
	if (num > 0) {
		num = -num;
	}
	return num;
}

let result = makeNegative(10);
console.log(result);
