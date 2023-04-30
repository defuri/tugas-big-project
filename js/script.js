window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".kontainer-nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    var navbar1 = document.querySelector("#navigasi");
    navbar1.classList.toggle("scrolled1", window.scrollY > 50);
    var navbarhilang = document.querySelector(".kontainer-nav");
    navbarhilang.classList.toggle("scrolled2", window.scrollY > 1256);
});

    let login = document.getElementById('login-popup');
    let bg = document.getElementById('login-background');
    // let switching = document.getElementById('register');
    // let switchBack = document.getElementById('login');

    function openLogin() {
        login.classList.add('active-btn');
        bg.classList.add('active-btn');
    }

    function closeLogin() {
        login.classList.remove('active-btn');
        bg.classList.remove('active-btn');
    }

    function switchRegister() {
        login.classList.add('active');
    }

    function switchLogin() {
        login.classList.remove('active');
    }

// const wrapper = document.querySelector(".wrapper");
// const links = document.querySelectorAll(".link");
// const btnPopup = document.querySelectorAll(".btn-pop");

// links.forEach(link => {
//     link.addEventListener("click" , a => {
//         a.preventDefault();
//         wrapper.classList.toggle("active");
//     });
// });

// btnPopup.forEach(link => {
//     link.addEventListener("click" , b => {
//         b.preventDefault();
//         wrapper.classList.toggle("active-btn")
//     });
// });

// function ilang() {
//     document.getElementById("wrapper").style.display = "none";
// }