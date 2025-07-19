// Unary Operator (one operand)
let x = 9;
x -= 8;
console.log(x);

// Binary Operator (two operands)
let y = 6,
	z = 7;
console.log(z - y);

// Arithmetic Operators

// Addition
console.log(9 + 10);

// Subtraction
console.log(11 - 9);

// Multiplication
console.log(5 * 4);

// Division
console.log(110 / 11);

// Modulus
console.log(110 % 11);

// Exponentiation
console.log(2 ** 5);

// String Concatenation
console.log("I am learning " + "javascript.");
console.log(1 + "1");
console.log(1 + 1 + "1");

// Other operators with string
console.log(6 - "2");
console.log("6" / "3");

// Unary operator with boolean
console.log(+true);
console.log(+false);

// Unary operator with string
console.log(+"2" + +"3");

// Assignment Operators
let a = (b = c = d = 4);
console.log(a, b, c, d);

// Post Increment and Post Decrement operator
let f = 2;
f++;
console.log(f);

let q = 3;
q--;
console.log(q);

// Pre Increment and Pre Decrement operator
let newF = ++f;
console.log(newF);

let newQ = --q;
console.log(newQ);

// Comparison Operators
console.log(5 > 6); // false
console.log(5 >= 5); // true
console.log(5 < 6); // true
console.log(5 <= 6); // true
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != 6); // true
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
