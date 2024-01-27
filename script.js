// alert("hello world");
// console.log("helo world");

// document.write
// document.getElementById
// alert
// console.log

// document.write("hello world");

// alert("hello world");
// console.log("hello world");

// variables (number, string, array, object)
// let x = 5;
// var y = 9;
// let myArray = [0, 78, 9, 6, 5];
// let admission = "CCS/03003/022";
// console.log(x);
// console.log(y);
// console.log(myArray);
// console.log(admission);

// var y = 78;

// {
//   let x = 9;
// }

/**!SECTION
 *
 * Operators
 * + - *
 */

// arithmetic, assignment, bitwise, comparison, logical
// let x = 2;
// let y = 7;
// console.log(2 / 7);

//assignment Operators
// let x = 10;
// console.log(x);

// comparison operators == !== === != > <

// let x = 2;
// let y = "2";

// x === y ? console.log("equal") : console.log("not equal")
// console.log(x + y);

/**!SECTION
 * Data types
 * (String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object)
 */

// let myString = "Hello"; // string
// let x = 14; // number
// let y = 68726478637463867868347646n; // BigInt
// let isOld = true; // boolean
// let uvariable = undefined; // undefined data type
// let myNullNumber = null; // null data type

// console.log(typeof myString);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof isOld);
// console.log(typeof uvariable);
// console.log(typeof myNullNumber);

/**!SECTION
 *
 * Control structures
 * (if -- else, switch, loop(while, for));
 */

// let age = window.prompt("enter your age");
// if (Number(age) >= 18 && Number(age) < 30) {
//   alert("eligible to party");
// } else if (Number(age) > 30) {
//   alert("you are now a grown up");
// } else {
//   alert("you are still young");
// }

// let value = "Hello";

// switch (value) {
//   case "yes":
//     console.log("you selected Yes");
//     break;
//   case "No":
//     console.log("you selected No");
//     break;
//   default:
//     console.log("you didnt select what was there");
// }

/**!SECTION
 *
 * loops
 * while, for
 *
 */

// list of even numbers from 1 to 20 using a while loop

// let number = 0;

// while (number <= 20) {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
//   number++;
// }

// for (let number = 0; number <= 20; number++) {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
// }

/**!SECTION
 *
 * Arrays And Objects
 */

// let myArray = [9, 18, 7, 5, 3];
// let stringArray = ["Felix", "James", 8];

//accessing an array
// console.log(myArray[0]);
// console.log(stringArray[1]);
// console.log(myArray);

// const cars = new Array("Saab", "Volvo", "TX");
// console.log(cars[1]);

// objects;

// let student = {
//   admission: "CCS/03003/022",
//   name: "Felix",
//   hasId: "yes",
//   age: 23,
// };

// console.log(student);
// console.log(student.admission);

// let { admission, name, hasId, age } = student;
// console.log(name);
// console.log(age);

/**!SECTION
 *
 * functions (array, string, Math)
 */

//array lengrh, tostring, at, join, map

// let numbers = [23, 55, 67, 20, 19];
// // let vals = ["John", "doe"];
// console.log(numbers.length);
// console.log(numbers.toString());
// console.log(numbers.at(3));

// // console.log(numbers.join(vals));

// numbers.map((number) => {
//   return console.log("<li>" + number + "</li>");
// });

// Math function (sin, cosine, pi, etc);

// console.log(Math.E);
// console.log(Math.SQRT2);

// console.log(Math.ceil(0.0873));

/***!SECTION
 *
 *
 * try catch
 */

// console.log(20 / 0);

// function myfunction() {
//   try {
//     document.getElementById("myid").innerHTML = "I was clicked";
//   } catch (e) {
//     // where we catch our error
//     console.log(e);
//   }
// }

// DOM

// console.log(document);
// const object = document.getElementById("myParagraph");
// console.log(object.innerHTML);
// object.innerHTML = "I love Js";
// console.log(object.innerHTML);
// const classObject = document.getElementsByClassName("code");
// console.log(classObject);
// const tagObject = document.getElementsByTagName("p");
// console.log(tagObject);

const div = document.getElementById("temporaryDOM");
const paragraph = document.createElement("p");
paragraph.innerHTML = "I just created this";
div.appendChild(paragraph);

function myfunction() {
  div.removeChild(paragraph);
}

// adding event handlers
const myButton = document.getElementById("mybutton");
// myButton.onclick = function () {
//   console.log(" a button was clicked");
// };

myButton.addEventListener("click", function () {
  console.log(" a button was clicked");
});
