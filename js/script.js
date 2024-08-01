const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-container");
    navBar.classList.toggle("active")
}