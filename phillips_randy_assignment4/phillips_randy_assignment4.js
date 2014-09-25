// Randy D. Phillips
// SDI 1409
// Project 4


// Global Variables
var emailReturn;
var urlReturn;

// My Functions


        // Email Validation Function
        
var checkEmail = function(myEmail) {
   var atSign = myEmail.indexOf("@");
   var periodSign = myEmail.indexOf(".");
   var lastAtSign = myEmail.lastIndexOf("@");
   var spaceCheck = myEmail.indexOf(" ");
   
    if (atSign > 1 && periodSign > atSign + 1 && periodSign + 1 < myEmail.length && spaceCheck === -1 && lastAtSign === atSign) {
       
        return true;
    
   } else {
        
        return false;
    };
}


        // URL Validation Function

var checkUrl = function(myUrl) {
    var myNewUrl = myUrl.toLowerCase();
    var pUrl = myNewUrl.indexOf("http://");
    var sUrl = myNewUrl.indexOf("https://");
    
    if (pUrl === 0 || sUrl === 0) {
        
        return true;
    
    } else {
        
        return false;
    }
   
}


        //  Money Formatting Function
        
var formatMoney = function(valueInput) {
    var newValueInput = parseFloat(valueInput);
    var nanCheck = isNaN(valueInput);
    var valueFormatted = newValueInput.toFixed(2);
    
    if (nanCheck === true) {
       
        return("NaN");
 
    } else {
        
        return(valueFormatted);
    }
};


        // Return as Number
        
var convertString = function(stringVal) {
    var stringParse = parseFloat(stringVal);
    
    if (stringParse !== isNaN) {
        return stringParse;
    } else {
        return false;
    }
}

        // Array Total Value
        
var totalValue = function(numberElement) {
    
    var arrayTotal = 0;
   
    for (var i = 0; i < numberElement.length; i++) {
        
        if (!isNaN(parseInt(numberElement[i]))) {
            
            var arrayTotal = arrayTotal + parseFloat(numberElement[i]);
    
        } 
    }
    
    return arrayTotal;   
}



        // Find Smallest Value
        
var smallValue = function(argArray) {
    var smallestValue = 0;
    
    for (var i = 0; i < argArray.length; i++) {
        
        if (argArray[smallestValue] < argArray[i]) {
            
            var smallestValue = smallestValue;
      
        } else {
      
            var smallestValue = i;
        }
    }
    return argArray[smallestValue];   
}


// Outputs

        // Email Outputs
var emailInput = "attackruby@fullsail.edu";

var emailReturn = checkEmail(emailInput);

console.log("e-mail address: " + emailInput + " is " + emailReturn);

        // URL Outputs
        
var urlInput = "HttPs://www.google.com/";

var urlReturn = checkUrl(urlInput);

console.log("Url address: " + urlInput + " is " + urlReturn);

        // Money Format Outputs

var enterValue = 21.2;

var valueReturn = formatMoney(enterValue);

console.log("You have $" + valueReturn + ".");

        // Return String as Number Outputs
        
var enterString = 29.184;

var numberReturn = convertString(enterString);

console.log(numberReturn);

        // Add Numbers in Array
  
var numberArray = [4,1,1,1,"1",1,"11",1,1,"hello", true, 2.1];

var totalReturn = totalValue(numberArray);

console.log(totalReturn);

        // Smallest Value Outputs
        
var inputArray = [33,9,151,53,7,8,141,111,5,10,329,2304];

var smallestReturned = smallValue(inputArray);

console.log(smallestReturned);
