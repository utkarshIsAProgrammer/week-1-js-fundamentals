// Primitive Data Types

// Number
let age = 19;
let pi = 3.1415926;
let infinite = Infinity;
let negativeInfinite = -Infinity;
let notANumber = NaN;
console.log(age, pi, infinite, negativeInfinite, notANumber);
console.log(
	typeof age,
	typeof pi,
	typeof infinite,
	typeof negativeInfinite,
	typeof notANumber
);

// BigInt
const bigInt = 12345678901234567890123456789n;
console.log(bigInt);
console.log(typeof bigInt);

// String
let name = "Panchajanya";
let stringLiteral = `${name} is learning to code.`;
console.log(name, stringLiteral);
console.log(typeof name, typeof stringLiteral);

// Boolean
let isProgrammer = false;
let isLearningToCode = true;
console.log(isProgrammer, isLearningToCode);
console.log(typeof isProgrammer, typeof isLearningToCode);

// Null
let nothing = null;
console.log(nothing);

// Undefined
let height = undefined;
console.log(height);
