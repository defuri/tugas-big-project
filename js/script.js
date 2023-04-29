window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".kontainer-nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    var navbar1 = document.querySelector("#navigasi");
    navbar1.classList.toggle("scrolled1", window.scrollY > 50);
    var navbarhilang = document.querySelector(".kontainer-nav");
    navbarhilang.classList.toggle("scrolled2", window.scrollY > 1256);
});

const wrapper = document.querySelector(".wrapper");
const links = document.querySelectorAll(".link");
const btnPopup = document.querySelectorAll(".btn-popup");

links.forEach(link => {
    link.addEventListener("click" , e => {
        e.preventDefault();
        wrapper.classList.toggle("active");
    });
});

btnPopup.forEach(link => {
    link.addEventListener("click" , e => {
        e.preventDefault();
        wrapper.classList.toggle("active-btn")
    });
});
