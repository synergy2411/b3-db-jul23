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
class Person {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    return this.name;
  }
}

class Student extends Person {
  // Private Member
  #courseEnrolled;

  // Static
  static numberOfStudent = 0;

  // no-args constructor
  // constructor(){}      // NO METHOD OVERLOADING

  constructor(studId, studName) {
    super(studName);
    this.studId = studId;
    // this.studName = studName;
    Student.numberOfStudent++;
  }

  // Accessor & Mutator
  get courseEnrolled() {
    return this.#courseEnrolled;
  }
  set courseEnrolled(value) {
    this.#courseEnrolled = value;
  }
  getDetails() {
    return (
      this.studId +
      " : " +
      super.getDetails() +
      "\n" +
      "Course Enrolled : " +
      this.courseEnrolled
    );
  }
}

let monica = new Student("S001", "Monica Geller");
monica.courseEnrolled = "React";
console.log(monica.getDetails());

let jenny = new Student("S002", "Jenny Doe");
jenny.courseEnrolled = "Node";

console.log("Total Students Enrolled : " + Student.numberOfStudent);
