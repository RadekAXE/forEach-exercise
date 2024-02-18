// Load the buttons into a constants -->
const lightButton = document.querySelector(".btn-light");
const darkButton = document.querySelector(".btn-dark");
const buttonsPrimary = document.querySelectorAll(".btn-primary");

// Changing the colors of selected modes-->
const body = document.querySelector("body");
const headings = document.querySelectorAll("h2");
const paragraphs = document.querySelectorAll("p");

// Light mode -->
lightButton.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(240, 100%, 94%)";
  headings.forEach((lightColors) => {
    lightColors.style.color = "black";
  });
  paragraphs.forEach((lightColors) => {
    lightColors.style.color = "black";
  });
});

// Dark mode -->
darkButton.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  headings.forEach((darkColors) => {
    darkColors.style.color = "white";
  });
  paragraphs.forEach((darkColors) => {
    darkColors.style.color = "white";
  });
  buttonsPrimary.forEach((darkColors) => {
    darkColors.style.boxShadow = "1px 1px 20px rgba(255, 255, 255, 1)";
  });
});
