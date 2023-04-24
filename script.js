
  
const menuToggle = document.getElementById('menu-toggle');
const mobileItems = document.querySelectorAll('#mobile-menu>span');


if(window.matchMedia("max-width: 800px")){
    for (const mobileItem of mobileItems) {
        menuToggle.addEventListener('click', function() {
            mobileItem.classList.toggle('show');
        });
    }
}