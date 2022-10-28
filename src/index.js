var menu =  document.getElementById("menu-nav");
var activemenu = document.querySelector('.active-menu')

menu.onclick = function() {
    activemenu.classList.toggle('open')
}