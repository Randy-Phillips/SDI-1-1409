// alert("JavaScript works!");

//*

// MY VARIABLES

var myProfessor;
var myNum;
var readyBoolean;
var fullName;
var meReady;


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

function readyBoolean(meReady, fullName) {
	while(meReady === false) {
		console.log("You must be ready " + fullName + "!");
	} 
	console.log("You are Ready " + fullName);
}


		// STRING FUNCTION
		



		// NUMBER FUNCTION

function myMathSkills(myNum) { 
	 
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


	// CALL PROCEDURE AND PROMPT FOR myProfessor String
myProfessor = prompt("What is your name, Professor?");
openMessage(myProfessor);
	// CALLED NUMBER FUNCTION AND PROMPT FOR NUMBER INPUT
myNum = parseInt(prompt("what is your lucky number, " + myProfessor + "?","1-50"));
myMathSkills(myNum);



// RETURNED VALUES

console.log("myNum Variable within my Number Function: " + myNum);
console.log("myNum Variable within my Number Function: " + myNum);
console.log("myNum Variable within my Number Function: " + myNum);


//*/