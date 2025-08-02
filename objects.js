//object literals

let user = {
  name: "crystal",
  address: "itahari",
  age: "36",
  blogs: ["why is yiu gay", "why is you not gay"],
  mamaghar: "nepal",
  profession: "bhikari",
  email: "chor",
};

console.log(user);
console.log(user.age);

user.age = 350;
console.log(user.age);

console.log(user["name"]);

console.log(user["blogs"]);

console.log(user.profession);
console.log(user["profession"]);

user.profession = "maha bhikari";
console.log(user.profession);

user["profession"] = "chnadl bhikari";
console.log(user.profession);

const nam = "name";
console.log(user["nam"]);
