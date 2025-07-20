// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator) {
	let operations = {
		add: a + b,
		subtract: a - b,
		multiply: a * b,
		divide: a / b,
	};

	return operations[operator];
}

/* function arithmetic(a, b, operator) {
	let operations = {
		add: "+",
		subtract: "-",
		multiply: "*",
		divide: "/",
	};

	operation = operations[operator];

	if (operation === "+") {
		return a + b;
	} else if (operation === "-") {
		return a - b;
	} else if (operation === "*") {
		return a * b;
	} else if (operation === "/") {
		return a / b;
	}
}
 */
let result = arithmetic(5, 2, "add");
console.log(result);
