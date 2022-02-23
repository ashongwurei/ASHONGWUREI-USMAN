const navItems = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".open-nav-items");
const btnClose = document.querySelector(".close-nav-items");
const navLinks = document.querySelectorAll(".link--nav");

const openNavItems = function () {
  navItems.classList.remove("hidden");
  overlay.classList.remove("hidden");
  btnClose.classList.remove("hidden");
  btnOpen.classList.add("hidden");
};

const closeNavItems = function () {
  navItems.classList.add("hidden");
  overlay.classList.add("hidden");
  btnClose.classList.add("hidden");
  btnOpen.classList.remove("hidden");
};

btnOpen.addEventListener("click", openNavItems);
btnClose.addEventListener("click", closeNavItems);
overlay.addEventListener("click", closeNavItems);
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", closeNavItems);
}
