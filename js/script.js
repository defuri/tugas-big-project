window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".kontainer-nav");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  var navbar1 = document.querySelector("#navigasi");
  navbar1.classList.toggle("scrolled1", window.scrollY > 50);
  var navbarhilang = document.querySelector(".kontainer-nav");
  navbarhilang.classList.toggle("scrolled2", window.scrollY > 1256);
});

let login = document.getElementById("login-popup");
let bg = document.getElementById("login-background");

function openLogin() {
  login.classList.add("active-btn");
  bg.classList.add("active-btn");
}

function closeLogin() {
  login.classList.remove("active-btn");
  bg.classList.remove("active-btn");
}

function switchRegister() {
  login.classList.add("active");
}

function switchLogin() {
  login.classList.remove("active");
}

// konten
function munculIlang() {
  let aidi = document.getElementById("listIlang");
  let aidi2 = document.getElementById("memulai");

  if (aidi.style.display == "none") {
    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}

function munculIlang2() {
  let aidi = document.getElementById("listIlang2");
  let aidi2 = document.getElementById("memulai2");

  if (aidi.style.display == "none") {
    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}

function munculIlang3() {
  let aidi = document.getElementById("listIlang3");
  let aidi2 = document.getElementById("memulai3");

  if (aidi.style.display == "none") {
    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}


// mode hitam
function ireng() {
    let ireng = document.getElementById("")
}