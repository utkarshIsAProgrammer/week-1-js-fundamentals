// "sayHi" is the method
let helper = {
	name: "Harry",
	age: 39,
	sayHi: function () {
		return "Hi!";
	},
};

let helper1 = helper.sayHi();
console.log(helper1);

// Shorter way to create a method and, "this" keyword used to access object's data.
let teacher = {
	name: "Ashwariya",
	age: 29,
	task() {
		return `${this.name} is teaching Math.`;
	},
};

let teacher1 = teacher.task();
console.log(teacher1);

// why use "this" keyword instead using object name directly
let user = {
	name: "John",
	sayHi() {
		console.log(this.name); // works because the user is nullified but the "admin" still holds the object.
		// console.log(user.name); // error because the user is nullified here.
	},
};

let admin = user;
user = null;
admin.sayHi();
