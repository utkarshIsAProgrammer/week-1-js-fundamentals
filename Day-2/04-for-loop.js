for (let i = 1; i < 6; i++) {
	console.log(i);
}

// Skipping Parts
let j = 1;
for (; j < 6; j++) {
	console.log(j);
}

let k = 1;
for (; k < 6; ) {
	console.log(k++);
}

// Infinite for loop
/* for (;;) {
	console.log("Infinity");
}
 */

// Breaking the loop
for (let z = 1; z < 10; z++) {
	if (z == 7) {
		break;
	}
	console.log(z);
}

// Continue the iteration
for (let m = 1; m < 10; m++) {
	if (m == 2) {
		CountQueuingStrategy;
		continue;
	}
	console.log(m);
}
