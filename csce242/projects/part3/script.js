// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    menuIcon.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  });
  