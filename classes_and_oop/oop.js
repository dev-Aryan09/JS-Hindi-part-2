// Object literal
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
