window.onload = function() {

    setTimeout( function() {
        document.getElementById("temp-banner").style.display = "none";
        document.getElementById("main-banner").style.display = "block";
        document.getElementById("svg-container").style.display = "block";
    }, 1000);
    setTimeout( function() {
        document.getElementById("play-heading-section").style.display = "none";
        document.getElementById("svg-container").style.display = "none";
        document.getElementById("castle-squares-9-square-img").style.display = "block";
        document.getElementById("logo-section").style.display = "flex";
        document.getElementById("shop-button").style.display = "flex";
        document.getElementById("shop-button-text").style.display = "block";
    }, 12000);
}