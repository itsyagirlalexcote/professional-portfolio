// Hamburger menu

document.addEventListener('DOMContentLoaded', function () {
  var mobileMenuToggle = document.getElementById('mobile-menu');
  var navList = document.querySelector('.nav-list');

  mobileMenuToggle.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
});