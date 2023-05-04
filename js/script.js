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

// !daftar isi kiri
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

function munculIlang4() {
  let aidi = document.getElementById("listIlang4");
  let aidi2 = document.getElementById("memulai4");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}

function munculIlang5() {
  let aidi = document.getElementById("listIlang5");
  let aidi2 = document.getElementById("memulai5");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}


function munculIlang6() {
  let aidi = document.getElementById("listIlang6");
  let aidi2 = document.getElementById("memulai6");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}


function munculIlang7() {
  let aidi = document.getElementById("listIlang7");
  let aidi2 = document.getElementById("memulai7");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}

function munculIlang8() {
  let aidi = document.getElementById("listIlang8");
  let aidi2 = document.getElementById("memulai8");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}

function munculIlang9() {
  let aidi = document.getElementById("listIlang9");
  let aidi2 = document.getElementById("memulai9");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}

function munculIlang10() {
  let aidi = document.getElementById("listIlang10");
  let aidi2 = document.getElementById("memulai10");

  if (aidi.style.display == "none") {

    aidi.style.display = "block";
    aidi2.style.listStyle = "url(../images/segitigaBawah.jpeg)";
  } else {
    aidi.style.display = "none";
    aidi2.style.listStyle = "url(../images/segitigaKanan.jpeg)";
  }
}