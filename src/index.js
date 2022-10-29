// var menu = document.querySelector(".menu-opennav");
var menu = document.getElementById('menu-opennav')
var activemenu = document.querySelector(".active-menu");
var closeButton = document.getElementById("close-button");
var listMenu = document.getElementById("list-menu")

menu.onclick = function () {
  activemenu.classList.toggle("open");
};

closeButton.onclick = function () {
  activemenu.classList.remove("open");
};

document.onclick = function(e) {
  
    if(e.target.id != "menu-opennav" && e.target.id != "list-menu") {
        activemenu.classList.remove("open");
    }
}