// Randy D. Phillips
// SDI 1409
// Project 3


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
    var pUrl = myUrl.indexOf("http://");
    var sUrl = myUrl.indexOf("https://");
    
    if (pUrl === 0 || sUrl === 0) {
        
        return true;
    
    } else {
        
        return false;
    }
   
}


        //  Money Formatting Function
        
var formatMoney = function(valueImput) {
    var nanCheck = isNaN(valueImput);
  //  var valueFormatted = valueImput.toFixed(2);
    
    if (nanCheck === true) {
       // return("NaN");
       console.log("a");
    } else {
        //return(valueFormatted);
        console.log("b");
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

        // Title Upper Case
        
var upperCase = function(titleName) {
    var spaceVar = " ";
    var findSpace = titleName.forEach(" ") ;
    alert(findSpace);
    
}


        // Find Smallest Vallue
        
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
var emailImput = prompt("enter an Email Address");

var emailReturn = checkEmail(emailImput);

console.log("e-mail address: " + emailImput + " is " + emailReturn);

        // URL Outputs
        
var urlImput = prompt("enter a URL");

var urlReturn = checkUrl(urlImput);

console.log("Url address: " + urlImput + " is " + urlReturn);

        // Money Format Outputs

var enterValue = prompt("Enter a value");

var valueReturn = formatMoney(enterValue);

console.log("You have $" + valueReturn + ".");

        // Return String as Number Outputs
        
var enterString = prompt ("Enter Number");

var numberReturn = convertString(enterString);

console.log(numberReturn);

        // Title Upper Case Outputs
  

        // Smallest Value Outputs
        
var imputArray = [33,9,3,5,7,8,2,3,5,10,329,2304];

var smallestReturned = smallValue(imputArray);

console.log(smallestReturned);
