// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!

Array.prototype.square = function () {
	let squaredArray = [];
	for (let i = 0; i < this.length; i++) {
		squaredArray.push(this[i] ** 2);
	}
	return squaredArray;
};

Array.prototype.cube = function () {
	let cubicArray = [];
	for (let i = 0; i < this.length; i++) {
		cubicArray.push(this[i] ** 3);
	}
	return cubicArray;
};

Array.prototype.average = function () {
	if (this.length === 0) {
		return NaN;
	}

	let average = 0;
	for (let i = 0; i < this.length; i++) {
		average += this[i];
	}
	average /= this.length;
	return average;
};

Array.prototype.sum = function () {
	let sum = 0;
	for (let i = 0; i < this.length; i++) {
		sum += this[i];
	}
	return sum;
};

Array.prototype.even = function () {
	let evenArray = [];
	for (let i = 0; i < this.length; i++) {
		if (this[i] % 2 === 0) {
			evenArray.push(this[i]);
		}
	}
	return evenArray;
};

Array.prototype.odd = function () {
	let oddArray = [];
	for (let i = 0; i < this.length; i++) {
		if (this[i] % 2 !== 0) {
			oddArray.push(this[i]);
		}
	}
	return oddArray;
};
