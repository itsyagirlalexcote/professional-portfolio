// Scroll to top on reload

document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Collapsible project sections

const collapse = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const contents = this.parentElement.querySelectorAll(".project-content, .about-content");

    contents.forEach(function(content) {
      if (content.style.display === "flex") {
        content.style.display = "none";
      } else if (content.style.display === "none") {
        content.style.display = "flex";
      } else {
        content.style.display = "flex";
      }
    });
  });
}

// Project slide in 
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', revealProjects);

  function revealProjects() {
    const projectSections = document.querySelectorAll('.project-item-wrapper');

    projectSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight / 1.5) {
        section.classList.add('slide-in');
      }
    });
  }
});




