const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
//   console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    // using if-esle

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // } else {
    //     body.style.backgroundColor = "red"
    // }

    // using switch case

    let colorChange = ""
    switch (colorChange) {
        case "":
            body.style.backgroundColor = e.target.id
            break;
        case "":
            body.style.backgroundColor = e.target.id
            break;
        case "":
            body.style.backgroundColor = e.target.id
            break;
        case "":
            body.style.backgroundColor = e.target.id
            break;
    }
  });
});
