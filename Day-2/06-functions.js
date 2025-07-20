// Function Declaration

function microsoftGreet(name, role = "Programmer") {
	// Local variable
	let msg = `Hello dear ${name} you are employed as a ${role} in Microsoft.`;
	console.log(msg);

	// Return Statement
	return "Wishing you a happy and success career at Microsoft.";
}

let employmentWish = microsoftGreet("Panchajanya");
console.log(employmentWish);

// Global variable
let microsoftAnnualPackage = "60LPA";
console.log(microsoftAnnualPackage);

// Function Expression
let googleGreet = function (name, role = "Programmer") {
	let msg = `Hello dear ${name} you are employed as a ${role} in Google.`;
	console.log(msg);
	return "Wishing you a happy and success career at Google.";
};

employmentWish = googleGreet("Panchajanya");
console.log(employmentWish);

let googleAnnualPackage = "60LPA";
console.log(googleAnnualPackage);

// Arrow function
let idDetails = (
	name,
	age,
	email,
	role = "Programmer",
	employeeID = "8326x4589y"
) => {
	return `Here are your ID card details --> ${name}, ${age},${email}, ${role}, ${employeeID}`;
};

let getIdDetails = idDetails(
	"Panchajanya",
	19,
	"utkarshprogrammer360@gmail.com"
);
console.log(getIdDetails);
