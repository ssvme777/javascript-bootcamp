//Using console.log

console.log("hello world");
console.log("hello", "world");

// Declaring variables

var a = 1;
var b = "hello world";
var c = {
  name: "bhavini"
};
var d = ["josh", "bhavini", "srinjay"];

console.log("a :", a);
console.log("b :", b);
console.log("c :", c);
console.log("d :", d);

// Variable types

console.log("type of a :", typeof a);
console.log("type of b :", typeof b);
console.log("type of c :", typeof c);
console.log("type of d :", typeof d);

// Accessing object properties

console.log("c.name :", c.name);
console.log("d[0] :", d[0]);
console.log("d[1] :", d[1]);
console.log("d[2] :", d[2]);
console.log("d[3] :", d[3]);

// Modifying variables

a = 2;
console.log("modify a: ", a);

b = "hello";
console.log("modify b: ", b);

b += " world";
console.log("add to b: ", b);

c.age = 21;
console.log("add property age to c: ", c);

d.push("allison");
console.log("push new value into d: ", d);

d[3] = "jason";
console.log("modify 4th element of d: ", d);

//Declaring functions

function foo() {
  console.log("inside function")
}

//Calling functions
foo();


