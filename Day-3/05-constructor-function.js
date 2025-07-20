// Making a constructor function
function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User("Jack");
console.log(user.name);
console.log(user.isAdmin);

// "new.target" to check is the new is used or not.
function MoreUser(name) {
	if (!new.target) {
		return new MoreUser(name);
	}
	this.name = name;
	this.isAdmin = true;
}

let newUser = MoreUser("Donald Duck");
console.log(newUser.name);
console.log(newUser.isAdmin);

// Using return with the constructor function
// if the object is returned then it replaces the "this" value.
// if returning a primitive value then ignore it and return the "this" value.
function BigUser() {
	this.name = "John";
	return { name: "Godzilla" }; // returning a new object
}

let userBig = new BigUser();
console.log(userBig.name); // Godzilla

function SmallUser() {
	this.name = "John";
	return 42; // primitive value
}

let userSmall = new SmallUser();
console.log(userSmall.name); // John
