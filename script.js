/* let fname = "precious";
console.log(fname);

let age = 31;
let isStudent = "notAStudent";
let result = isStudent.includes("not");
console.log(result);

const address = {
  city: "Lagos",
  country: "Nigeria",
};

let hobbies = ["learning JavaScript", "traveling", "listeningToMusic"];
console.log(hobbies); 

let undefinedVariable;

let nullVariable = "null";

console.log(typeof undefinedVariable); */

// let userName = prompt("what is your name?");

// let userAge = prompt("what is your age?");

// userAge = Number(userAge);

// let currentYear = new Date().getFullYear();

// let yearOfBirth = currentYear - userAge;

// console.log(yearOfBirth);

// alert(`Hello ${userName}! You were born in the year ${yearOfBirth}`);

// for loops

// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }
// console.log("loop finished");

// const names = ["shaun", "mario", "luigi"];

// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// while loops

// const names1 = ["shaun", "mario", "luigi"];

// let i = 0;
// while (i < names1.length) {
//   console.log(names1[i]);
//   i++;
// }

// do while loops
// let i = 4;

// do {
//   console.log("in loop:", i);
//   i++;
// } while (i < 5);

// if statements

// const age = 25;
// if (age > 20) {
//   console.log("you are over 20years old");
// }

// else if statement
// const password = "p@ssword";

// if (password.length >= 8) {
//   console.log("that password is long enough!");
// } else {
//   console.log("password is not log enough");
// }

// const password = "p@ss";
// if (password.length >= 12) {
//   console.log("password is mighty strong");
// } else if (password.length >= 8) {
//   console.log("password long enough");
// } else {
//   console.log("password not long enough");
// }

// SWITCH STATEMENT
// const grade = "D";

// switch (grade) {
//   case "A":
//     console.log("you got an A!");
//     break;
//   case "B":
//     console.log("you got an B!");
//     break;
//   case "C":
//     console.log("you got an C!");
//     break;
//   case "D":
//     console.log("you got an D!");
//     break;
//   case "E":
//     console.log("you got an E!");
//     break;
//   default:
//     console.log("not a valid grade");
// }

// FUNCTION DECLARATION

// function greet() {
//   console.log("Hello world");
// }

// greet();

// // Function Expression
// const speak = function () {
//   console.log("hello there");
// };

// speak();

//Arguments and Parameters
// const speak = function (name, time) {
//   console.log(`good ${time} ${name} `);
// };

// speak("mario", "morning");

// ARROW FUNCTION

// const greet = () => "hello, world";

// TASK 1
// const number = 31;
// if (number > 0) {
//   console.log(`${number} is positive`);
// } else if (number < 0) {
//   console.log(`${number} is negative`);
// } else {
//   console.log(`${number} is zero`);
// }

// // TASK 2
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // TASK 3
// function sum(num1, num2) {
//   return num1 + num2;
// }
// const result = sum(2, 88);
// console.log(result);

// // TASK 4
// const sum1 = (num3, num4) => num3 + num4;
// const result1 = sum(2, 88);
// console.log(result1);

// const link = document.querySelector("a");
// document.querySelectorAll("p");
// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByTagName("");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "");

// const title = document.querySelector("header");

// title.setAttribute("style", "color:green;");

// title.style.color = "crimson";
// title.style.fontSize = "80px";

// console.log(title.style);
// console.log(title.style.color);

// const content = document.querySelector("p");

// console.log(content.classList);

// const paras = document.querySelectorAll("p");

// paras.forEach((p) => {
//   if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   }
//   if (p.innerText.includes("success")) {
//     p.classList.add("success");
//   }
// });

// var h2 = document.querySelector("#book-list h2");
// h2.addEventListener;

// var btns = document.querySelectorAll("#book-list.delete");

// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener("click".funtion(e){

//     const li = e.target.parentElement;

//     li.parentNode.removeChild(li)
//   });
// });

// TASK 1
// const test = document.querySelector("#greeting");

// console.log((test.textContent = "Hello, DOM!"));

// TAST 2
// const btn = document.getElementById("clickButton");

// btn.addEventListener("click", () => {
//   btn.textContent = "Clicked";
// });

// TASK 3
