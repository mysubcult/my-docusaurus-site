document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.navbar__link');
  navbarLinks.forEach(link => {
    link.setAttribute('target', '_self');
  });
});
