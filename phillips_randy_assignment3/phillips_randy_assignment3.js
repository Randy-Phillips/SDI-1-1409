// Randy D. Phillips
// SDI 1409
// Project 3


// Global Variables
	
var avgHourYr = 2080;
var firstIncome = 1;
var secondIncome = 2;
var thirdIncome = 3;
var getReady = false;
var array = [10,12,15,22,92,41];
var stringReturn = "theString";

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
	
	return getReady;
}


// Returned Number(s) + 1 Function + Local Variables + Number Arguments

var annualIncome = function (personName,personIncome,personTax) {
	
	var salaryCalc = (personIncome * (1 - personTax)) * avgHourYr;
	
	say(personName + " makes $" + salaryCalc  + " a year after taxes.");
   
   return salaryCalc;
}



// Array function + number argument + string argument

var Array2 = function(number,string) {
	array[array.length] = number;
	array[array.length] = string;
	return array;
	
	
}

// Array argument

var arrayArg = function(argArray) {
	say("there are " + argArray.length + " elements in my array.");
	if (argArray.length > 5) {
		var stringReturn = "We have a big array remaining!";
		return stringReturn;
		} else if (argArray.lengh < 1) { 
		
		var stringReturn = "array is short!";
		return stringReturn;
	} else {
		var stringReturn = "array is normal."
		return stringReturn;
	}
}

// Main Code
var getReady = readyLoop();
newFuction();
forLoop();

var firstIncome = annualIncome(jsonData.playerNames[0].personFirstName,jsonData.playerNames[0].hrIncome,jsonData.playerNames[0].overallTax);

var secondIncome = annualIncome(jsonData.playerNames[1].personFirstName,jsonData.playerNames[1].hrIncome,jsonData.playerNames[1].overallTax);

var thridIncome = annualIncome(jsonData.playerNames[2].personFirstName,jsonData.playerNames[2].hrIncome,jsonData.playerNames[2].overallTax);

say("While money isn't everything, so isn't creativity. I can't think of anything right now to make a story but I can show you what I know.");

var array = Array2(2,"theman");

var stringReturn = arrayArg(array);

// Outputs
say("____________________");
say(firstIncome);
say(getReady);
say(array);
say(stringReturn);

