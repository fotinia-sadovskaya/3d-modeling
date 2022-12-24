function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  if (name.length > 0 && email.length) {
    alert("Hello " + name + "! Let's start flying together🚀!");
  } else {
    alert("Pleasant flight🚀!");
  }
}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
