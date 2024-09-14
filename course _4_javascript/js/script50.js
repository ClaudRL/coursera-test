// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
var names = ["Alice", "Bob", "Charlie"];
names[5] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);