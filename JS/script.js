var i = 0;
var txt = 'Hello! i m a developer.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// navigation for home
var hom = document.getElementById("hom");

// menu contents items
var conme = document.getElementById("contactme");
var abtme = document.getElementById("aboutme");
var pflo = document.getElementById("portfolio");

hom.addEventListener("click", Closeall);

function Closeall(){
  conme.style.display = "none";
  abtme.style.display = "none";
  pflo.style.display = "none";
}

// Navigation for portfolio.

var pf = document.getElementById("pflo");
pf.addEventListener("click", DisplayPortfolio);
function DisplayPortfolio(){
  pflo.style.display = "block";
  abtme.style.display="none";
  conme.style.display = "none";
}

// Navigation for About me.

var abme = document.getElementById("abt");
abme.addEventListener("click", DisplayAboutme);
function DisplayAboutme(){
  abtme.style.display="block";
  conme.style.display = "none";
  pflo.style.display = "none";
}

// Navigation for Contact me

var ctme = document.getElementById("cont");
ctme.addEventListener("click", DisplayContactme);
function DisplayContactme(){
  conme.style.display = "block";
  pflo.style.display = "none";
  abtme.style.display="none";
}
