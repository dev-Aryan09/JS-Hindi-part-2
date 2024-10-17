// ---------------------------------------- Object literal----------------------------------
// Object literal is literally an object in JS

const user = {
  username: "hitesh",
  loginCount: 9,
  signedIn: true,

  getUserInfo: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user["username"]);
// console.log(user.getUserInfo());

// console.log(this);   // gives empty paranthesis {}

//------------------------ Constructor function ---------------------------------------------

// -> Sometimes we need to create many objects of the same type.
// -> To create an object type we use an object constructor function.

// NOTE -> In the constructor function, this has no value. The value of this will become the new object when a new object is created.

function User(username, logincount, isLoggedIn) {
  this.username = username;
  this.loginCount = logincount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCOde", 11, false);
console.log(userOne);
console.log(userOne.constructor);   // Tells about the reference
// console.log(userTwo);
