// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

function convertHashToArray(hash) {
	let hashArray = [];
	for (let i = 0; i < Object.keys(hash).length; i++) {
		hashArray.push([Object.keys(hash)[i], Object.values(hash)[i]]);
	}
	return hashArray;
}

let result = convertHashToArray({
	name: "Jeremy",
	age: 24,
	role: "Software Engineer",
});
console.log(result);
