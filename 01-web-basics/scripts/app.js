// var user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
// };

// var friends = ["Monica", "Joe", "Ross", "Chandler"];

// var userTwo = [
//   "String",
//   101,
//   true,
//   function () {
//     console.log("Called");
//   },
//   {},
// ];

// userTwo[3]();

// var x : string = "Hello String!";

// console.log(typeof x); // ?

// x = 201;

// console.log(typeof x); // ?

// x = true;

// console.log(typeof x); // ?

// ARRAY METHODS

var marks = [98, 94, 80, 85, 99];

// marks.push(99);
// marks.unshift(99);
// marks.pop();
// marks.shift();

// marks.sort();
// marks.reverse();
// marks.fill(0, 1, 4);

// var newMarks = marks.map(function (el) {
//   return el + 1;
// });

// var newMarks = marks.filter(function (el) {
//   return el >= 85;
// });

// const newMarks = marks.slice(0);

// var position = marks.indexOf(99);

// var position = marks.findIndex(function (el) {
//   return el === 85;
// });

// var isFound = marks.includes(101);

// var isFound = marks.some(function (el) {
//   return el > 98;
// });

// var isFound = marks.every(function (el) {
//   return el > 98;
// });

// console.log(marks);

// console.log(marks.join(","));

// var newArray = marks.reduce(function (prevValue, currValue) {
//   return (prevValue += currValue);
// });

// var totalMarks = 0;
// var newArray = marks.forEach(function (el) {
//   totalMarks += el;
// });
// console.log("Total Marks : ", totalMarks);

// console.log(isFound);
// console.log(marks);
// console.log(newArray);
// console.log(position);

// var employees = [
//     {
//         name: "John",
//         age: 32,
//         salary : 1000
//     },
//     {
//         name: "Jenny",
//         age: 28,
//         salary : 1500
//     },
//     {
//         name: "Jack",
//         age: 34,
//         salary : 2000
//     },
//     {
//         name: "Jill",
//         age: 30,
//         salary : 1800
//     },
// ]

// - Employee names with more than 1500 salary
// - Average Salary
// - Name of employee having second highest age

// FUNCTIONS

// function mystry() {
//   var chooseNumber = function () {
//     return 7;
//   };
//   return chooseNumber;
//   var chooseNumber = function () {
//     return 12;
//   };
// }

// // console.log(mystry()); // ?

// var nestedFn = mystry();

// console.log(nestedFn());

// Creational : memroy is allocated
// Executional : program executes

// setTimeout(function () {
//   console.log("1 second left");
// }, 1000);

// Higher Order Function (HOF)
// function demo(arr, cb) {
//   if (arr.length > 2) {
//     console.log("Greater than Two");
//     cb(null, arr.length);
//   } else {
//     console.log("Less than Two");
//     cb(new Error("Too less values"));
//   }
// }

// demo([1, 2], function (err, arrayLength) {
//   if (err) return console.error(err);
//   console.log("Callback called with Length - ", arrayLength);
// });

// Closure : Process of binding the outer scope variable with the nested function

// function mystry() {
//   var x = 4;
//   return function () {
//     return ++x;
//   };
// }

// var nestedFn = mystry();

// console.log(nestedFn()); // 5

// // var nestedFn = mystry();
// console.log(nestedFn()); // 6

// function buildTicket(transport) {
//   var numberOfPassengers = 0;

//   return function (name) {
//     return (
//       "Hello Mr/s. " +
//       name +
//       "\n" +
//       "You are going via + " +
//       transport +
//       "\n" +
//       "Your ticket ID is " +
//       ++numberOfPassengers
//     );
//   };
// }

// var shipFn = buildTicket("Ship");

// console.log(shipFn("John"));
// console.log(shipFn("Jenny"));

// var trainFn = buildTicket("Train");
// console.log(trainFn("Jack")); // ?

// Scope chaining
// -> nestedFn -> outer function -> Global Environment

// var x = 101;

// function a() {
//   function b() {
//     console.log(x); // 101
//   }
//   b();
// }

// a();

// Lexical Scoping -> actual placement of function
// var x = 201;

// function b() {
//   console.log(x); // Global access
// }

// function a() {
// //   var x = 101;
//     b();

// }

// a();
