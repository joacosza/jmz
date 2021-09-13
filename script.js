var transitioning = false;
var animEnable = false;
var transBetween = false;

var botonGal = document.getElementById("button-gallery");
var botonCon = document.getElementById("button-contact");
var transGal = document.querySelector(".gal-anim");
var transCon = document.querySelector(".form-anim");
var holdBox = document.querySelector("#holdbox");
var thanks = document.querySelector("#thanks");
var submitBtn = document.querySelector("#submit-button");

function transReset () {
    transGal.style.transitionDelay = "0s";
    transCon.style.transitionDelay = "0s";
}

//boton galeria

botonGal.addEventListener('click', function () {
    let check = document.getElementById("form-contact")
    let galeria = document.getElementById("gallery");
    if (transitioning) {
        return;
    }
    transBetween = false;
    transReset();
    if (check.classList.contains("form-anim-end")) {
        transGal.style.transitionDelay = "1s";
        check.classList.toggle("form-anim-end");
        transBetween = true;
    }
    galeria.classList.toggle("gal-anim-end");
    if (transBetween == false) {
        holdBox.classList.toggle("holdbox-anim-end");
    }
    transitioning = true;
})


transGal.addEventListener('transitionend', function () {
    transitioning = false;
})

//boton contacto

botonCon.addEventListener('click', function () {
    let check = document.getElementById("gallery")
    let form = document.getElementById("form-contact");
    if (transitioning) {
        return;
    }
    transBetween = false;
    transReset();
    if (check.classList.contains("gal-anim-end")) {
        transCon.style.transitionDelay = "1s";
        check.classList.toggle("gal-anim-end");
        transBetween = true;
    }
    form.classList.toggle("form-anim-end");
    if (transBetween == false) {
        holdBox.classList.toggle("holdbox-anim-end");
    }
    transitioning = true;
})


transCon.addEventListener('transitionend', function () {
    transitioning = false;
})
