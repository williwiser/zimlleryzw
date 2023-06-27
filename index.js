var nav = document.querySelector("nav");
var hamburger = document.querySelector(".icon");
var header = document.querySelector("header");

hamburger.addEventListener("click", function(){
    nav.classList.toggle("res");
    nav.classList.toggle("hd-res");
})

var links = document.getElementsByClassName("link");
var sections = document.querySelectorAll("section");


for (var i=0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}