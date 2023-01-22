const cityName = "Chennai";
const stateName = "Tamilnadu";

let nameObj = {
  firstName: "Ankit",
  middleName: "Vijay",
  lastName: "Gupta",
  printFullName: function (city, state) {
    console.log("Full Name: ", this.firstName, this.middleName, this.lastName, city, state);
  },
};

let anotherName = {
  firstName: "Guru",
  middleName: "Shrikant",
  lastName: "Prasad",
};

//Call Method: calls the method with different object and passing input parameters as per signature of the method
console.log("Call Method");
console.log("-----------");
nameObj.printFullName.call(anotherName, cityName, stateName);

//Apply Method: calls the method with different objects and accepts parameters in array set which can be passed dynamically
console.log("Apply Method");
console.log("-----------");
const anotherNameDetails = [cityName, stateName];
nameObj.printFullName.apply(anotherName, anotherNameDetails);

//Bind Method: wraps up the method call and object and gets stored in called method for later calls.
console.log("Bind Method");
console.log("-----------");
console.log("1) bind method called.");
let callerMethod = nameObj.printFullName.bind(anotherName, cityName, stateName);
console.log("2) caller method invoked later.");
callerMethod();
