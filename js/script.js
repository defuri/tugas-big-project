window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".kontainer-nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    var navbar1 = document.querySelector("#navigasi");
    navbar1.classList.toggle("scrolled1", window.scrollY > 50);
    var navbarhilang = document.querySelector(".kontainer-nav");
    navbarhilang.classList.toggle("scrolled2", window.scrollY > 1256);
});

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove ("active");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerview: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nexEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
