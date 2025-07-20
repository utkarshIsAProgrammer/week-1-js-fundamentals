// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna) {
	let complementaryDna = "";
	let temp = "";
	for (let i = 0; i < dna.length; i++) {
		temp += dna[i];

		for (let j = 0; j < temp.length; j++) {
			if (dna[i] == temp[i]) {
				console.log(temp.indexOf(dna[i]));
			}
		}
	}
}

dnaStrand("GTAT");

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
