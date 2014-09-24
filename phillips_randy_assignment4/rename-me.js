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

        // Return String as Number
        
var enterString = prompt ("Enter Number");

var numberReturn = convertString(enterString);

console.log(numberReturn);
