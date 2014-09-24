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


        // URL Validaiton Function

var checkUrl = function(myUrl) {
    var pUrl = myUrl.indexOf("http://");
    var sUrl = myUrl.indexOf("https://");
    
    if (pUrl === 0 || sUrl === 0) {
        
        return true;
    
    } else {
        
        return false;
    }
   
}


// Outputs

        // Email Outputs
var emailImput = prompt("enterEmail");

var emailReturn = checkEmail(emailImput);

console.log("e-mail is " + emailReturn);

        // URL Outputs
        
var urlImput = prompt("enterURL");

var urlReturn = checkUrl(urlImput);

console.log("Url is " + urlReturn);


