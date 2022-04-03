'use strict';

// Selecting Elements
const navItems = document.querySelector('.nav-items');
const overlay = document.querySelector('.overlay');
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelectorAll('.link--nav');
const sections = document.querySelectorAll('.section');

// Defining Repetitive Functions
const toggleNavItems = function () {
  navItems.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const hideNavItems = function () {
  navItems.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Active Navigation Link on Scroll anc Click
window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY > sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (navLink) {
    navLink.classList.remove('active');
    if (navLink.classList.contains(current)) {
      navLink.classList.add('active');
    }
  });
});

// Mobile Navigation Behaviour
toggleButton.addEventListener('click', toggleNavItems);
overlay.addEventListener('click', hideNavItems);

for (let navLink of navLinks) {
  navLink.addEventListener('click', hideNavItems);
}
