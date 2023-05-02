window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".kontainer-nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    var navbar1 = document.querySelector("#navigasi");
    navbar1.classList.toggle("scrolled1", window.scrollY > 50);
    var navbarhilang = document.querySelector(".kontainer-nav");
    navbarhilang.classList.toggle("scrolled2", window.scrollY > 1256);
});

<<<<<<< Updated upstream
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
=======
let login = document.getElementById('login-popup');
let bg = document.getElementById('login-background');

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

let bool = true; //!boolean untuk fungsi njir


function muncul() {
    const aidi = document.getElementById("isi");
    let cetrekan = true;

    if(cetrekan == true) {
        aidi.style.display = "block";
        cetrekan = false;
    } else {
        aidi.style.display = "none";
        cetrekan = true;
    }
}
>>>>>>> Stashed changes
