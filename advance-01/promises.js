// const promiseOne = new Promise(function (resolve, reject) {
//   // do an asyn task
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {                                          // .then is connected to resolve
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 2");
//     resolve()
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "chai", email: "chai@gmail.com" });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ userName: "aryan", password: 123 });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     console.log("promise resolved");
//     return user.userName;
//   })                                         // chaining in promise
//   .then((userName) => {
//     console.log(userName);
//     console.log("resolved again");
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolvedf or rejected"));

//-------------------  async and await ----------------------------

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ userName: "JavaScript", password: 123 });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers()


fetch("https://api.github.com/users/hiteshchoudhary")      // fetch() gets in priority 
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
