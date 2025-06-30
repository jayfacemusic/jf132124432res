<!-- JavaScript Document -->

  window.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu a');
    var checkbox = document.getElementById('menu-toggle');

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        checkbox.checked = false;
      });
    }
  });