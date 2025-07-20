// Or

console.log(5 > 6 || 6 > 5);
console.log(undefined || null || 0);
console.log(undefined || 1 || 0);

// AND
console.log(5 > 6 && 6 < 5);
console.log(true && true);
console.log(false && false);
console.log(true && false);
console.log(false && true);

// NOT
console.log(!true);
console.log(!false);

// Nullish Coalescing Operator
// return b if a is not defined or it is null or undefined.
let a;
console.log(a ?? "b");
