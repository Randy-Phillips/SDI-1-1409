// alert("JavaScript works!");



// MY VARIABLES

var myProfessor = "Lee";
var mNum;
var myBoolean = true;


// MY FUNCTIONS
		// PROCEDURE
		
function openMessage(myProfessor) {
	
	if (myProfessor === "Lee") {
		console.log("You are my Professor");
	} else {
		console.log("You are NOT my Professor");
	}
}


function myMathSkills(myNum) { 
	 
	console.log("Today, " + myProfessor + ", we will be count to 10, from your lucky number, " + myNum);
	console.log("newNum var: " + newNum);
	if (myNum < 10) {
		console.log("We are starting at " + myNum + " and counting up to 10");
		for (myNum < 10; myNum++) {
			console.log("We are at " + myNum + ", keep counting!");
		}
	}
	
}



// MAIN CODE


myProfessor = prompt("What is your name, Professor?");
openMessage(myProfessor);
	
myNum = prompt("what is your lucky number, " + myProfessor + "?","1-50");
myMathSkills(myNum);


