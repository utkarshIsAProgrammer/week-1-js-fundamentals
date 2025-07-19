// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100.

let v1 = 50,
	v2 = 100,
	v3 = 150,
	v4 = 200,
	v5 = 2,
	v6 = 250;

function equal1() {
	let a = v1,
		b = v1;
	return a + b;
}

function equal2() {
	let a = v6,
		b = v3;
	return a - b;
}

function equal3() {
	let a = v1;
	b = v5;
	return a * b;
}

function equal4() {
	let a = v4;
	b = v5;
	return a / b;
}

function equal5() {
	let a = v6;
	b = v3;
	return a % b;
}
