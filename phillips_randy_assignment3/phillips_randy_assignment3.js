//*

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

// 

var annualIncome = function (personName,personIncome,personTax) {
	
	var salaryCalc = (personIncome * (1 - personTax)) * avgHourYr;
	
	console.log(personName + " makes $" + salaryCalc  + " a year");
   
   return salaryCalc;
}



// Main Code

newFuction();
forLoop();

var firstIncome = annualIncome(jsonData.playerNames[0].personFirstName,jsonData.playerNames[0].hrIncome,jsonData.playerNames[0].overallTax);

annualIncome(jsonData.playerNames[1].personFirstName,jsonData.playerNames[1].hrIncome,jsonData.playerNames[1].overallTax);

annualIncome(jsonData.playerNames[2].personFirstName,jsonData.playerNames[2].hrIncome,jsonData.playerNames[2].overallTax);




console.log(firstIncome);
//*/
