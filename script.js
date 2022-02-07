const navItems = document.querySelector(".nav-items");
const toggleButton = document.querySelector(".toggle-button");
// const navLink = document.querySelectorAll(".link--nav");

toggleButton.addEventListener("click", function () {
  navItems.classList.toggle("active");
});

// document.addEventListener("click", function () {
//   navItems.classList.add("hidden");
// });

// for (let i = 0; i < navLink.length; i++)
//   navLink[i].addEventListener("click", function () {
//     navItems.classList.add(hidden);
//   });
