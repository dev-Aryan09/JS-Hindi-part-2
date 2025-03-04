let myName = "aryan    ";
// console.log(myName.trueLenght);

let myHeros = ["thor,", "spiderman"];

Array.prototype.heyHitesh = function () {
  console.log(`this is present in array only`);
};

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpierPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

// heroPower.hitesh();
// myHeros.hitesh()
// myName.hitesh()

// myHeros.heyHitesh()
// heroPower.heyHitesh()  // will give an error

// -------- INHERITANCE --------------

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: true,
};

const TAsupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
};

// console.log(Teacher.name);

Teacher.__proto__ = User

// console.log(Teacher.name);
// console.log(Teacher);

let anotherUsernmae = "ChaiAurCode    ";

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
}

anotherUsernmae.trueLenght()
