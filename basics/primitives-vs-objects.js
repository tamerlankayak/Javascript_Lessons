let lastName = "Williams";
let oldLAstname = lastName;
lastName = "Davis";
console.log(lastName, oldLAstname);

const jessica = {
  firtname: "Jesica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

const jessica2 = {
  firtname: "Jesica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jesicaCopy = Object.assign({}, jessica2);
jesicaCopy.lastName = "Davis";
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jesicaCopy);

jesicaCopy.family.push("Mary");
jesicaCopy.family.push("John");
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jesicaCopy);
