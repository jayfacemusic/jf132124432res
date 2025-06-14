// JavaScript Document / Author: Jayface / Website: jayface.com / Version: 1.05. / 2025-06-14 //
document.querySelectorAll('.my-menu a').forEach(function(link) {
  link.addEventListener('click', function() {
    var toggle = document.getElementById('my-menu-toggle');
    if (window.innerWidth <= 768 && toggle.checked) {
      toggle.checked = false;
    }
  });
});
