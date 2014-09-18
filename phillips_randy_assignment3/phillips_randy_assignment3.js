//*

console.log("it works");

jsonData.playerNames[0][2]

// Global Variables

var annualSalary = 1;
var avgHourYr = 2080;


// My Procedure

function newFuction () {
	
	console.log("So, three people, three different hourly earnings, three different tax brackets.. how much do they make a year!");
	
}
// For Loop 

var forLoop = function() {
	
	for (var firstKey in jsonData.playerNames) {
		
		console.log("________________");
		
		console.log(jsonData.playerNames[firstKey]);
	}
}

// Nested Loop

var anualIncome = function (personName,personIncome,personTax) {

console.log(personName + " makes $" + (personIncome * (1 - personTax)) * avgHourYr + " a year");

}

newFuction();
forLoop();
anualIncome(jsonData.playerNames[0].personFirstName,jsonData.playerNames[0].hrIncome,jsonData.playerNames[0].overallTax);
anualIncome(jsonData.playerNames[1].personFirstName,jsonData.playerNames[1].hrIncome,jsonData.playerNames[1].overallTax);
anualIncome(jsonData.playerNames[2].personFirstName,jsonData.playerNames[2].hrIncome,jsonData.playerNames[2].overallTax);
//*/
