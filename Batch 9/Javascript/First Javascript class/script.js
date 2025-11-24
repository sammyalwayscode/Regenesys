// // Linking external JS
// // document.writeln("This is from the external Guy");

// //Varibles
// // var, let, const

// let myage = 22;
// console.log(myage);

// //Data Types
// //String
// let myHobbie = "I love music and coding so much";
// console.log(myHobbie);

// //Number
// let thisYear = 2025;
// console.log(thisYear);

// //Boolean
// let isAccepted = true;
// console.log(isAccepted);

// //Undefine
// let myClass;
// console.log(myClass);

// //Null
// let allStudent = null;
// console.log(allStudent);

// //Variable declearatot and Asignment
// let myClass2; //Variable declearator
// myClass2 = 56; //Varable asignment
// // myClass2 = 78;
// console.log(myClass2);

// //Operators
// let a = 34;
// let b = 56;
// let c = 20;
// let d = 19;
// let myName = "Sam";
// let e = "34";
// let f = 34;

// //Arithemetic Operators
// const add = a + b;
// console.log(add);
// const minus = b - d;
// console.log(minus);
// const divide = b / a;
// console.log(divide);
// const mutiply = c * d;
// console.log(mutiply);
// const modulus = b % a;
// console.log(modulus);

// //Assignment Operator
// let x = 23;
// x += 10;
// console.log(x);
// x -= 19;
// console.log(x);

// //Comparism Operators
// let equalTest = a == b;
// console.log(equalTest);
// let equalTest2 = e == f;
// console.log(equalTest2);
// let equalTest3 = e === f;
// console.log(equalTest3);
// let equalTest4 = a != b;
// console.log(equalTest4);
// let greatTest = a > b;
// console.log(greatTest);
// let greatTest2 = a < b;
// console.log(greatTest2);
// let greatTest3 = a >= d;
// console.log(greatTest3);

// //Logical Operator
// const isFee = true;
// const isUniform = true;
// const isTextBook = false;

// const andrew = isFee && isUniform && !isTextBook;
// console.log("Andrew is ", andrew);
// const iquma = isFee || isUniform || isTextBook;
// console.log("Iquma is ", iquma);
// console.log(!isFee);

// //Unuary operator
// let counter = 3;
// counter++;
// console.log(counter);
// counter--;
// console.log(counter);

// //Tenury
// //condition ? show this if true : show this if false

// const valueCheck = 20 < 19 ? "20 is greater" : "19 is Greater";
// console.log(valueCheck);

//Conditional Statements
// if Statement: Runs only if the condition is True
// if (9 > 7) {
//   console.log("The first Number is the greatest");
// }

//If-else statement runs when the condition is both true or false
// if (27 > 23) {
//   console.log("The first Number is the Gratest");
// } else {
//   console.log("The second Number is the Gratest");
// }

// console.log(27 > 23);

//1. Write a Program that gives the highest of 2 numbers
// const userNumber1 = 54;
// const userNumber2 = 46;

// if (userNumber1 > userNumber2) {
//   console.log(userNumber1, "which is Value 1 Is the greates Number");
// } else {
//   console.log(userNumber2, "Which Is Value 2 is the greates Number");
// }

//2. What a program that tells a user if he is legible to vote
// const user = 18;
// if (user >= 18) {
//   console.log("You are legbile to Vote");
// } else console.log("Sorry, You cannot vote");

//The if-else-if allows us to write mutiple conditions

//Write a condition to tell us the greates of three Numbers
// const num1 = 34;
// const num2 = 34;
// const num3 = 34;

// if (num1 > num2 && num1 > num3) {
//   console.log("Num One", num1, "Is the greatest of the three");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Num Two", num2, "Is the greatest of the three");
// } else if (num3 > num1 && num3 > num2) {
//   console.log("Num Three", num3, "Is the greatest of the three");
// } else if (num1 === num2 && num1 === num3) {
//   console.log("All numbers are of equal value");
// } else {
//   console.log("Enter a valid Number");
// }

//Template Literals: allows us to write a function/variable inside a string
// const myName = "Hassan";

// const Bio =
//   "name is a boy and Samuel loves Soccer. Samuel is 12 years old and Samuel Lives with his aunt";
// console.log(Bio);

// const newBio = `${myName} is a boy and ${myName} loves Soccer. ${myName} is 12 years old and ${myName} Lives with his aunt`;
// console.log(newBio);

//Prompt and Alert
// alert("Welcome to javascript class");
// prompt("Enter your name");

// const userName = prompt("Enter your Usewrname");
// console.log(userName);
// alert(userName);

//String and Number Conversion
// const myAge = "23";

// console.log(typeof myAge);
// const myNewAge = parseInt(myAge);
// console.log(typeof myNewAge);

// const myStringAge = 45;
// console.log(myStringAge);
// const convertedString = myStringAge.toString();
// console.log(convertedString);

// const firstNumber = parseInt(prompt("Enter your first number"));
// const secondNumber = parseInt(prompt("Enter your second Number"));

// const result = firstNumber + secondNumber;
// console.log(result);

//math methods
// const myNum = 144;
// const myFloatNum = 34.13624;
// const squar = Math.sqrt(myNum);
// const power = Math.pow(myNum, 2);
// const floor = Math.floor(myFloatNum);
// const ceil = Math.ceil(myFloatNum);

// console.log(squar, power, floor, ceil);
// const randomNum = Math.random() * 10000;
// console.log(randomNum);
// const myOTP = Math.ceil(randomNum);
// console.log(`Your OTP is ${OTP}`);
// console.log(Math.random());

// const randomNum = Math.random() * 1000000;
// const myOTP = parseInt(prompt(`Your OTP is ${Math.ceil(randomNum)}`));

// const otpCheck = Math.ceil(randomNum);
// const otpCommand =
//   otpCheck === myOTP
//     ? alert("You have loged in successfully")
//     : alert("Incorrect OTP try again");
// alert(otpCommand);

//Write a prompt that tells a user of they are ligble to vote
// const userAge = parseInt(prompt("Enter your age"));
// if (userAge >= 18) {
//   alert("You are ligble to vote");
// } else {
//   alert("Sorry you can't vote, try in the next voting year");
// }

// 1. Write a program that determines whether a given number is positive or negative.
// const number = parseInt(prompt("Enter any number"));

// // number >= 0 ? alert("Positive Number") : alert("Negative Number");
// if (number > 0) {
//   alert("Number is possitive");
// } else if (number < 0) {
//   alert("Number is negative");
// } else {
//   alert("Number is zero");
// }

// 2. Write a program that checks if a number is even or odd.
// 3. Write a program to determine the greater of three numbers.
// 4. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// 5. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

//Functions in javascript
// function myName() {
//   console.log("Samuel");
// }

// // Fat Arrow Method  =>

// const myAge = () => {
//   console.log(23);
// };

// myName();
// myAge();

// const reusableName = (username) => {
//   console.log(username);
// };

// reusableName("James");
// reusableName("Hassan");
// reusableName(623);

// //Write a function to add three number
// function addNum(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
// }

// addNum(45, 37, 28);
// addNum(63, 47, 27);

//Write a function to tell us the highest of 2 numbers

//Event handlers
// function sayHello() {
//   alert("Hello Learners");
// }

// function highlightText() {
//   document.body.style.backgroundColor = "red";
// }

//Array in Javascript
// let myName;
// const arrayTest = ["john", 35, "table", "board", true, myName, null];
// console.log(arrayTest);
// console.log(arrayTest[3]);
// arrayTest[5] = "Battry";
// arrayTest[6] = false;
// arrayTest[0] = "Orange";
// console.log(arrayTest);

//String Methods
// const testString = "I am a boy and i love soccer";
// const testString2 = "I LOVE CODING A LOT";
// const username = "samuel";

// console.log(testString2.toLowerCase());
// console.log(testString.toUpperCase());
// let upperUsername = username.toUpperCase();
// console.log(username.charAt(2));
// console.log(upperUsername.charAt());

//Array Methods

// const fruits = ["Mango", "Pear", "Gauva", "Watermelon", "Orange"];
// console.log(fruits);
// console.log(fruits.push("Pineapple", "Apple"));
// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits.unshift("Apple", "grapes"));

// console.log(fruits.splice(2));

//Javascript Objects
// const myProfile = {
//   name: "Jane",
//   age: 20,
//   job: "Nurse",
//   bio: "I love playing the trumpet",
//   address: {
//     street: "12 Browns Street",
//     city: "New York",
//     country: "USA",
//   },
//   hobbies: ["music", "movies", "travling", "Reading"],
// };

// // console.log(myProfile);
// // console.log(myProfile.bio);
// // myProfile.age = 21;
// // console.log(myProfile);
// // myProfile.name = myProfile.name + "-ABC";
// // console.log(myProfile);

// // console.log(myProfile["job"]);

// console.log(myProfile);
// console.log(myProfile.address.street);

// const userAddress =
//   myProfile.address.street + myProfile.address.city + myProfile.address.country;
// console.log(userAddress);

// const userAddress2 = `${myProfile.address.street}, ${myProfile.address.city}, ${myProfile.address.country}`;
// console.log(userAddress2);

// const userHobbie = myProfile.hobbies[2];
// console.log(userHobbie);

//DOM Manipulation in Javascript
// console.log(document);

//Selecting Dom Element
// const idSelect = document.getElementById("myIdSelector");
// console.log(idSelect);
// const classSelect = document.querySelector(".myClassSelector");
// console.log(classSelect);

//Changing and Modifying content from the DOM
// const myContainer = document.getElementById("container");
// console.log(myContainer);
// myContainer.textContent = "I am the New Container Text";
// myContainer.style.color = "red";
// myContainer.style.fontFamily = "jokerman";

//Adding Event Listeners
// const myButton = document.getElementById("myDomButton");
// const btnRemove = document.getElementById("btnEventRemove");

// const handleEvent = () => {
//   myButton.style.backgroundColor = "green";
// };

// myButton.addEventListener("click", () => {
//   alert("I have been manipulated from Javascript");
//   myButton.addEventListener("click", handleEvent);
//   myButton.style.backgroundColor = "green";
// });

// btnRemove.addEventListener("click", () => {
//   myButton.removeEventListener("click", handleEvent);
// });

// myButton.addEventListener("click", handleEvent);
// myButton.addEventListener("click", handleEvent);

// const myEmailInput = document.querySelector(".emailInput");
// const myPasswordInput = document.querySelector(".passwordInput");
// const myFormCall = document.getElementById("myForm");
// console.log(myEmailInput.value);

// myFormCall.addEventListener("submit", (e) => {
//   e.preventDefault(); //Prevent Page reload
//   console.log(
//     "Email: " + myEmailInput.value,
//     "Password: " + myPasswordInput.value
//   );
// });

//Validating email
// myFormCall.addEventListener("submit", (e) => {
//   e.preventDefault(); //Prevent Page reload
//   if (myEmailInput.value === "") {
//     alert("Email field required");
//   }
//   console.log(
//     "Email: " + myEmailInput.value,
//     "Password: " + myPasswordInput.value
//   );
// });

//ES6

// function myName() {
//   return (name = "Samuel");
// }

// console.log(myName());

// const myName2 = () => {

// };

// console.log(myName2());

// let count = 10;

// if (true) {
//   let count = 20;
//   console.log(count);
// }
// console.log(count);

//Distructuring

// const myNum = [34, 87, 28, 36, 39, 92, 37, 88, 21, 90];
// console.log(myNum);

// // const [first, cat, , light, ...test] = [34, 87, 28, 36, 39, 92, 37, 88, 21, 90];
// const [first, cat, , light, ...test] = myNum;
// console.log(first);
// console.log(cat);
// console.log(light);
// console.log(test);

const myObj = {
  name: "Johnson",
  age: 23,
  bio: "I love soccer",
};

console.log(myObj.name);

const { name, age, bio } = myObj;
console.log(age);
