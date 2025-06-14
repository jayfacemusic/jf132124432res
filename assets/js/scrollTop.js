// scrollTop.js  /  Author: Jayface / Website: jayface.com / Version: 1.05. //
document.addEventListener('DOMContentLoaded', function() {
  var scrollTopButton = document.getElementById('scroll-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });

  scrollTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
