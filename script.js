const navItems = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".open-nav-items");
const btnClose = document.querySelector(".close-nav-items");
const navLinks = document.querySelectorAll(".link--nav");
const home = document.querySelector(".active");
const about = document.getElementById("about-button");
const projects = document.getElementById("projects-button");
const contact = document.getElementById("contact-button");

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

home.addEventListener("click", function () {
  home.classList.add("active");
  about.classList.remove("active");
  projects.classList.remove("active");
  contact.classList.remove("active");
});

about.addEventListener("click", function () {
  about.classList.add("active");
  home.classList.remove("active");
  projects.classList.remove("active");
  contact.classList.remove("active");
});

projects.addEventListener("click", function () {
  projects.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");
});

contact.addEventListener("click", function () {
  contact.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  projects.classList.remove("active");
});
