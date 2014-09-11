// alert("JavaScript works!");

// MY VARIABLES

var myProfessor;
var myNum;
var fullName;
var meReady;
var lastName;


// MY FUNCTIONS
		// PROCEDURE FUNCTION
		
function openMessage(myProfessor) {
	
	if (myProfessor === "Lee" || "lee" || "LEE") {
		console.log("You are my Professor!");
	} else {
		console.log("You are NOT my Professor!");
	}
}

		// BOOLEAN FUNCTION

function askReady(meReady, fullName) {
	while(meReady === false) {
		console.log("You must be ready to continue!");
		meReady = confirm("You must be ready " + fullName + "!");
	} 
	console.log("You are Ready " + fullName + "!");
}


		// STRING FUNCTION
		
function createLastName(myProfessor, lastName) {
	fullName = myProfessor + " " + lastName;
	console.log("Thank you for your full name, " + fullName + ".");
}


		// NUMBER FUNCTION

function showMathSkills(myNum) { 
	 
	console.log("Today, " + myProfessor + ", we will be count to 10, from your lucky number, " + myNum);
	if (myNum < 10) {
		console.log("We are starting at " + myNum + " and counting up to 10");
		for (myNum++; myNum < 10; myNum++) {
			console.log("We are at " + myNum + ", keep counting!");
		}
		console.log("We have counted to 10!");
	} else {
		console.log("We are starting at " + myNum + " and counting down to 10");
		for (myNum--; myNum > 10; myNum--) {
			console.log("We are at " + myNum + ", keep counting!");
		}
		console.log("We have counted to 10!");
	}
	
}

	
// MAIN CODE
	
/////		PROMPT NAME + CALL PROCEDURE FUNCTION		////////
myProfessor = prompt("What is your name, Professor?");
openMessage(myProfessor);

/////		PROMPT LASTNAME + CALL STRING FUNCTION		////////
lastName = prompt("What is your last Name?");
createLastName(myProfessor, lastName);

/////		CONFIRM READY + CALL BOOLEAN FUNCTION		////////
meReady = confirm("Are you ready to continue?");
askReady(meReady, fullName);

/////		PROMPT NUMBER + CALL NUMBER FUNCTION		////////
myNum = parseInt(prompt("what is your lucky number Professor " + fullName + "?","1-50"));
showMathSkills(myNum);




// RETURNED VALUES
		/// Spacer for console log
console.log("//////////////////////////////////");
console.log("meReady Variable: " + meReady);
console.log("myNum Variable: " + myNum);
console.log("myProfessor Variable: " + myProfessor);
console.log("lastName Variable: " + lastName);
console.log("fullName Variable: " + fullName);




