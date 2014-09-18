//*

// Global Variables

var avgHourYr = 2080;
var firstIncome = 1;
var secondIncome = 2;
var thirdIncome = 3;
var getReady = false;

// Console.log Shorthand
function say(say) {
	console.log(say);
}



// My Procedure

function newFuction () {
	
	say("So, three people, three different hourly earnings, three different tax brackets.. how much do they make a year!");
	
}
// For Loop 

var forLoop = function() {
	
	for (var firstKey in jsonData.playerNames) {
		
		say("________________");
		
		say(jsonData.playerNames[firstKey]);
	}
}


// While Loop + Nested Loop + Function

var readyLoop = function() {
	var getReady = confirm("Are you ready to see their annual incomes?");
	
	while (getReady === false) {
		
		var getReady = confirm("Are you ready to see their annual incomes?");
	
	}

	say("Lets get a count down going!");

	for(i = 3; i > 0 ; i--) {

		say(i);
	}
	say("lets go!");
}




// Returned Number(s) + 1 Function + Local Variables

var annualIncome = function (personName,personIncome,personTax) {
	
	var salaryCalc = (personIncome * (1 - personTax)) * avgHourYr;
	
	say(personName + " makes $" + salaryCalc  + " a year");
   
   return salaryCalc;
}



// Main Code
readyLoop();
newFuction();
forLoop();

var firstIncome = annualIncome(jsonData.playerNames[0].personFirstName,jsonData.playerNames[0].hrIncome,jsonData.playerNames[0].overallTax);

var secondIncome = annualIncome(jsonData.playerNames[1].personFirstName,jsonData.playerNames[1].hrIncome,jsonData.playerNames[1].overallTax);

var thridIncome = annualIncome(jsonData.playerNames[2].personFirstName,jsonData.playerNames[2].hrIncome,jsonData.playerNames[2].overallTax);




say(firstIncome);
//*/
