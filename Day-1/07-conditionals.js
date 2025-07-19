// If - Else if - Else
let age = 19;

if (age === 18) {
	console.log("Give a driving test.");
} else if (age < 18) {
	console.log("You cannot drive.");
} else {
	console.log("You can drive");
}

// Nested Conditional Statements
let year = 1900;

if (year % 4 === 0) {
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			console.log("Leap Year");
		} else {
			console.log("Not Leap");
		}
	} else {
		console.log("Leap Year");
	}
} else {
	console.log("Not Leap");
}

// Ternary Operator
age = 2;
let canDrive =
	age === 18
		? console.log("Give a driving test.")
		: age < 18
		? console.log("You cannot drive.")
		: console.log("You can drive.");
console.log(canDrive);
