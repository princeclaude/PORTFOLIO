var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
    document.getElementById("col1-2").style.display = "block";
    document.getElementById("col1-1").style.display = "none";
    
}

var sidemenu = document.getElementById("sidemenu");
let body = document.querySelector("body");
 
function openmenu() {
    sidemenu.style.right = "0px";
    body.style.overflow = "hidden";
}
function closemenu() {
    sidemenu.style.right = "-200px";
    body.style.overflow = "scroll";
}

function speed() {
     sidemenu.style.right = "-200px";
      body.style.overflow = "scroll";
 }

function sourcecode() {
    document.getElementById("source-code").style.display = "block";
    setTimeout(function () {
        document.getElementById("source-code-text").style.display = "none";
        document.getElementById("source-code").style.width = "0%"
        document.getElementById("source-code").addEventListener("transitionend", function () {
            this.style.display = "none";
         })
     },7000)
}
let p = document.getElementById("btnhide").value;
function forminput10() {
    document.getElementById("btnhid").style.opacity = 1;
   
    
}

function light() {
    body.style.backgroundColor = "white";
    document.getElementById("switch").style.opacity = 0;
   body.style.color = "black";
    body.addEventListener("dblclick", function () { 
        this.style.backgroundColor = "black";
        this.style.color = "white";
        document.getElementById("switch").style.opacity = 2;
       
    })
    sidemenu.style.right = "-200px";
    body.style.overflow = "scroll";
   
   
}

function scrollup() {
    document.querySelector("#header").scrollIntoView({
      behavior: "smooth",
    });
}

