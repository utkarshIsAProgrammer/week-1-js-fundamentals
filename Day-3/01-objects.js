// Object Literal
let obj = {};
console.log(typeof obj);

// Object Constructor
let newObj = new Object();
console.log(typeof newObj);

// Key:Value pairs / properties
obj = {
	name: "Panchajanya",
	age: 19,
};

// Accessing values
console.log(obj.name);
console.log(obj.age);

// Adding property
obj.isLearning = true;
console.log(obj);

// Adding multi word property
obj["target job"] = "Full Stack Web Developer";
console.log(obj["target job"]);

// Deleting property
delete obj.age;
console.log(obj);

// Computed properties
let fruits = "mango";
let bag = {
	[fruits]: 5,
};
console.log(bag);

// Property value shorthand
function makeUser(name, age) {
	return {
		name: name,
		age: age,
	};
}
let user = makeUser("Harry", 30);
console.log(user);

// Property existence check
console.log("name" in obj);
console.log("target job" in obj);
