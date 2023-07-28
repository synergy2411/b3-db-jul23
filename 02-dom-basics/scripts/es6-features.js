// Arrow Function  argsList => fnBody

// var sum = (n1, n2) => n1 + n2;

// console.log("Sum : ", sum(2, 4));

// var friends = ["Monica", "Ross", "Rachel"];

// console.log(friends.filter((el) => el.includes("a")));

// Destructuring : "unpack the collection"

// var marks = [99, 98, 97, 96];

// var [m1, m3, m4] = marks;

// console.log(m3);

// var userOne = {
//   name: "John",
//   company: "DB",
//   isAdmin: true,
//   address: {
//     city: "Pune",
//     street: "201, Main Road, Wakad",
//   },
// };

// var { name, company, address } = userOne;

// userOne.address.street = "101, Main Road, Hinjewadi";

// console.log(address); // ?

// address.city = "Mumbai";

// console.log("User One : ", userOne.address);

// var userTwo = {
//   name: "Jenny",
//   company: "DB",
//   isAdmin: false,
// };

// var { name: n1, company, isAdmin } = userOne;

// var { name: n2, company, isAdmin } = userTwo;

// console.log(company, n1, n2);

// BLOCK SCOPE VARIABLE : restrict the scope of variable to nearest block
// - let
// - const

// function demo(arr) {
//   // Variable hoisting
//   // laod (xoiu09809xx -> undefined) and flash(xxkhjhxx -> undefined)

//   if (arr.length > 2) {
//     let load = "LOADING";
//     console.log(flash);
//   } else {
//     let flash = "FLASHING";
//   }
// }

// demo([1, 2, 3, 4]);

// const username = "John";

// username = "Jenny";

// const user = {
//   name: "John",
// };

// user.name = "Jenny";

// console.log(user); // ?

// user = { name: "Jack" };

// const marks = [98, 99, 97];
// marks.push(90);

// console.log(marks.length); // ?

// marks = [];

// REST / SPREAD (...)
// - Rest : create the collection from individual items

// function demo(email, ...args) {
//   console.log(args[0]); // 32
// }

// demo("test@test")
// demo("test@test", 32)
// demo("test@test", 32, true);

// - Spread : expand the collection into individual items

// let numbers = [3, 4, 5];

// let moreNumbers = [1, 2, ...numbers, 6, 7, 8];

// console.log(moreNumbers);

// let userOne = {
//   name: "John",
//   company: "DB",
//   developer: true,
// };

// let userTwo = {
//   ...userOne,
//   name: "Jenny",
// };

// console.log(userTwo);

// Template Literals - Back Tick (` `)
// - Embed the variable within string
// - Multiline string

// let userName = "John Doe";

// let userAge = 32;

// let greet = `Hello from ${userName}!
// I'm ${userAge} years old!
// `;

// console.log(greet);

// Map / Set

// let user = {
//     "name" : ""
// }

// let map = new Map();

// map.set("String", "John");
// map.set(123, "Number");
// map.set(true, "Boolean");
// map.set({ name: "John" }, "Object");

// console.log(map.size);

// for (let key of map.keys()) {
//   console.log(key);
// }
// for (let val of map.values()) {
//   console.log(val);
// }
// for (let [key, value] of map.entries()) {
//   console.log(`${key} - ${value}`);
// }

// let set = new Set();

// set.add("Jack");
// set.add("John");
// set.add("Jenny");
// set.add("Jill");
// set.add("Jack");

// console.log(set.size);

// CLASSES
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   getDetails() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   // Private Member
//   #courseEnrolled;

//   // Static
//   static numberOfStudent = 0;

//   // no-args constructor
//   // constructor(){}      // NO METHOD OVERLOADING

//   constructor(studId, studName) {
//     super(studName);
//     this.studId = studId;
//     // this.studName = studName;
//     Student.numberOfStudent++;
//   }

//   // Accessor & Mutator
//   get courseEnrolled() {
//     return this.#courseEnrolled;
//   }
//   set courseEnrolled(value) {
//     this.#courseEnrolled = value;
//   }
//   getDetails() {
//     return (
//       this.studId +
//       " : " +
//       super.getDetails() +
//       "\n" +
//       "Course Enrolled : " +
//       this.courseEnrolled
//     );
//   }
// }

// let monica = new Student("S001", "Monica Geller");
// monica.courseEnrolled = "React";
// console.log(monica.getDetails());

// let jenny = new Student("S002", "Jenny Doe");
// jenny.courseEnrolled = "Node";

// console.log("Total Students Enrolled : " + Student.numberOfStudent);

// DEFAULT PARAMETERS
// function demo(arr = []) {
//   if (arr.length > 2) {
//     console.log("Do something");
//   } else {
//     console.log("Do something else");
//   }
// }

// demo();

// SHORT-CIRCUIT OPERATOR (&&)

// let arr = [1, 2, 3, 4];

// let result = arr.length > 2 ? " > 2" : " < 2";

// let resultTwo = arr.length < 2 && "Hello";

// let resultThree = 0 && "Hello";

// let resultFour = undefined && "Hello";

// console.log(result);
// console.log(resultTwo);
// console.log(resultThree);
// console.log(resultFour);

// NULLISH COALESCING OPERATOR (??)

// PROMISE API
// - Promise is the placeholder for future values

// - Pending State
// - Settled State
// - SUCCESS / RESOLVED
// - FAILURE / REJECTED

// function promiseProducer(flag) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (flag) {
//         resolve({ message: "SUCCESS" });
//       } else {
//         reject(new Error("Something went wrong"));
//       }
//     }, 2000);
//   });

//   return promise;
// }
// // Async...await
// async function promiseConsumer() {
//   try {
//     const response = await promiseProducer(false);
//     const result = JSON.stringify(response);
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// }

// .then().catch()
// function promiseConsumer() {
//   promiseProducer(false)
//     .then((result) => {
//       console.log("RESULT : ", result);
//       return JSON.stringify(result);
//     })
//     .then((resultTwo) => console.log("RESULT TWO : ", resultTwo))
//     .catch(console.error);
// }

// promiseConsumer();

// Promise.resolve("Some Data").then(console.log);

// Promise.reject(new Error("Bad Promise Data"))
//   .then(console.log)
//   .catch(console.error);

// const promiseOne = Promise.resolve("Data One");
// const promiseTwo = Promise.resolve("Data Two");
// const promiseThree = Promise.resolve("Data Three");
// const promiseFour = Promise.reject(new Error("Rejected"));

// const promiseArray = [promiseOne, promiseTwo, promiseThree, promiseFour];

// Promise.all(promiseArray).then(console.log).catch(console.error);
// Promise.allSettled(promiseArray).then(console.log).catch(console.error);

// function createPromise(ms, data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, ms);
//   });
// }

// let promiseOne = createPromise(1000, "First Promise");
// let promiseTwo = createPromise(1500, "Second Promise");
// let promiseThree = createPromise(2000, "Third Promise");
// let promiseFour = Promise.reject(new Error("Bad Promise"));

// let promiseArray = [promiseOne, promiseTwo, promiseThree, promiseFour];

// Promise.race(promiseArray).then(console.log).catch(console.error);
// Promise.any(promiseArray).then(console.log).catch(console.error);

// Remote Server Call

// - XMLHttpRequest

// let xhr = new XMLHttpRequest();

// xhr.onload = function () {
//   if (this.status === 200 && this.readyState === 4) {
//     console.log(this.response);
//   }
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// xhr.send();

// - Fetch API

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch(console.error);
