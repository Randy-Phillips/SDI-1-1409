//*

console.log("it works");


// Global Variables

var anualSalary = 1;
var avgHourYr = 2080;



// Nested Loop 

var nestedLoop = function() {
	
	for (var firstKey in jsonData.playerNames) {
		console.log("________________");
		for (var secondKey in jsonData.playerNames[firstKey]) {
			
			console.log(jsonData.playerNames[firstKey][secondKey]);
			
		}
	}
}



nestedLoop();

// console.log(jsonData.playerNames[0]);