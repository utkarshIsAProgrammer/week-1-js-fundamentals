// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function (n) {
	for (let i = 0; i * i <= n; i++) {
		if (i ** 2 === n) {
			return true;
		}
	}
	return false;
};

let a = isSquare(0);
console.log(a);
