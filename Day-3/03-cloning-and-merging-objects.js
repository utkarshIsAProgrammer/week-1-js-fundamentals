// Object comparison by reference
let obj1 = {};
let obj2 = {};
console.log(obj1 === obj2);

let newObj1 = {};
let newObj2 = newObj1;
console.log(newObj1 === newObj2);

// Cloning, Merging using "Object.assign"
let user = { name: "Panchajanya" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// "Object.assign" returns a shallow copy
Object.assign(user, permissions1, permissions2);
console.log(user.name);
console.log(user.canView);
console.log(user.canEdit);

// If the property name already exists then it will replaced.
Object.assign(user, { name: "Coder" });
console.log(user.name);

// Nested Cloning
let newUser = {
	name: "John",
	sizes: {
		height: 182,
		width: 50,
	},
};

let clone = Object.assign({}, newUser);
console.log(newUser.sizes === clone.sizes);
console.log(newUser.sizes, clone.sizes);
console.log(clone === newUser);

// "structuredClone" makes a deep copy.
let anotherUser = {
	name: "John",
	sizes: {
		height: 182,
		width: 50,
	},
};

let anotherClone = structuredClone(anotherUser);

console.log(anotherUser.sizes === anotherClone.sizes);

anotherUser.sizes.width = 60;
console.log(anotherClone.sizes.width);
