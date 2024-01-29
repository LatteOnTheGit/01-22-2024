// Define a JavaScript function called logMsg() 
//that can be used to log an error message for 
//any object that contains the property errMsg. 

const logMsg = function() {
    if (this.errMsg) {
        console.log(this.errMsg);
    }
}
const obj1 = { errMsg: "This is an error message" };
const obj2 = { errMsg: "This is another error message" };
logMsg.call(obj1); // This is an error message
logMsg.call(obj2); // This is another error message