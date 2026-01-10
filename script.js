/* Copyright (c) 2025 Evan Hilton */

let collapse_btns = document.getElementsByClassName("collapse_btn");
for (let i=0; i<collapse_btns.length; i++) {
    var collapse_btn = collapse_btns[i];
    collapse_btn.addEventListener("click", function() {
        this.classList.toggle("active");
        var collapse_content = this.nextElementSibling;
        var collapse_btn_icon = this.children[1];
        if (collapse_content.style.maxHeight){
            collapse_content.style.maxHeight = null;
            collapse_btn_icon.style.transform = "rotate(-45deg)";
          } else {
            collapse_content.style.maxHeight = collapse_content.scrollHeight + "px";
            collapse_btn_icon.style.transform = "rotate(0deg)";
          } 
    });
}

let ad_btns = document.getElementsByClassName("ad_btn");
for (let i=0; i<ad_btns.length; i++) {
    var ad_btn = ad_btns[i];
    const ad_btn_icon = ad_btn.children[1];
    ad_btn.addEventListener("click", function() {
        const iframe_window = this.parentElement.children[1].contentWindow;
        iframe_window.location.reload();
        ad_btn_icon.style.transition = "transform 0.2s ease-out";
        ad_btn_icon.style.transform = "rotate(405deg)";
        ad_btn_icon.addEventListener("transitionend", function reset() {
            ad_btn_icon.style.transition = "none";
            ad_btn_icon.style.transform = "rotate(45deg)";
            ad_btn_icon.offsetHeight;
            ad_btn_icon.removeEventListener('transitionend', reset);
        });
    });
}

let flyer_btns = document.getElementsByClassName("flyer_btn");
for (let i=0; i<flyer_btns.length; i++) {
    var flyer_btn = flyer_btns[i];
    flyer_btn.addEventListener("click", function() {
        const secondChild = this.children[1];
        secondChild.textContent = secondChild.textContent === "Front" ? "Back" : "Front";
        if (this.parentElement.children[1].style.display === "none") {
            this.parentElement.children[1].style.display = "block";
            this.parentElement.children[2].style.display = "none";
        } else {
            this.parentElement.children[1].style.display = "none";
            this.parentElement.children[2].style.display = "block";
        }
    });
}

let portfolio_piece_imgs = document.querySelectorAll("img.portfolio_piece");
for (let i=0; i<portfolio_piece_imgs.length; i++) {
    var portfolio_piece_img = portfolio_piece_imgs[i];
    portfolio_piece_img.addEventListener("click", function() {
        if (this.requestFullscreen) {
            this.requestFullscreen();
        } else if (this.webkitRequestFullscreen) { // Safari
            this.webkitRequestFullscreen();
        } else if (this.msRequestFullscreen) { // IE11
            this.msRequestFullscreen();
        }
    });
}

// window.addEventListener("resize", function() {
//     console.log("resize");
//     const iframes = document.querySelectorAll("iframe");
//     iframes.forEach((iframe) => {
//         iframe.contentWindow.location.reload();
//     });
// });