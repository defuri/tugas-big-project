window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".kontainer-nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    var navbarhilang = document.querySelector(".kontainer-nav");
    navbarhilang.classList.toggle("scrolled2", window.scrollY > 1256);
});
window.addEventListener("scroll", function() {
    var navbar1 = document.querySelector("#navigasi");
    navbar1.classList.toggle("scrolled1", window.scrollY > 50);
});