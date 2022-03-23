'use strict';

const navItems = document.querySelector('.nav-items');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelector('.open-nav-items');
const btnClose = document.querySelector('.close-nav-items');
const navLinks = document.querySelectorAll('.link--nav');
const sections = document.querySelectorAll('.section');

const openNavItems = function () {
  navItems.classList.remove('hidden');
  overlay.classList.remove('hidden');
  btnClose.classList.remove('hidden');
  btnOpen.classList.add('hidden');
};

const closeNavItems = function () {
  navItems.classList.add('hidden');
  overlay.classList.add('hidden');
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
};

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

btnOpen.addEventListener('click', openNavItems);
btnClose.addEventListener('click', closeNavItems);
overlay.addEventListener('click', closeNavItems);
for (let navLink of navLinks) {
  navLink.addEventListener('click', closeNavItems);
}
