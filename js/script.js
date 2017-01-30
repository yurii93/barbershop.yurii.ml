/* Форма входа */
var enter = document.querySelector(".user-block");
var popup = document.querySelector(".sign-in");
var close = popup.querySelector(".end");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[name=text]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

enter.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("sign-in-show");
    overlay.classList.add("overlay-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } 
    else {
        login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("sign-in-show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("sign-in-error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) { 
        event.preventDefault();
        popup.classList.add("sign-in-error");} 
    else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27 && popup.classList.contains("sign-in-show")) { 
        popup.classList.remove("sign-in-show");
        overlay.classList.remove("overlay-show");
    }                      
});

/* Карта */
var MapLink = document.querySelector(".open-map");
var MapPopup = document.querySelector(".map");
var MapClose = document.querySelector(".end-map");

MapLink.addEventListener("click", function(event) {
    event.preventDefault();
    MapPopup.classList.add("map-show");
    overlay.classList.add("overlay-show");
});

MapClose.addEventListener("click", function(event) {
    event.preventDefault();
    MapPopup.classList.remove("map-show");
    overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27 && MapPopup.classList.contains("map-show")) { 
        MapPopup.classList.remove("map-show");
        overlay.classList.remove("overlay-show");
    }                      
});