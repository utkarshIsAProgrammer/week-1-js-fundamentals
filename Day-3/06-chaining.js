let user = {
	name: "John",
};

console.log(user.address?.street); // undefined (no error)

// Chaining is like, if address exists, then give me street. Otherwise, just give me undefined — but don’t crash!”
