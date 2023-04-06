window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".kontainer-nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});