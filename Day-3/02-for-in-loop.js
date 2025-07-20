let user = {
	name: "Panchajanya",
	age: 19,
	"is learning": true,
	"target role": "Full Stack Web Developer",
};

for (let key in user) {
	console.log(key); // keys
	console.log(user[key]); // values
}
