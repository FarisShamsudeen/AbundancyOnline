window.onload = function() {
    window.scrollTo(0, 0);
  };


let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header .flex .navbar');

menuBar.onclick = () =>{
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.getElementById("home").scrollIntoView();
document.getElementById("about").scrollIntoView();
document.getElementById("teachers").scrollIntoView();
document.getElementById("reviews").scrollIntoView();