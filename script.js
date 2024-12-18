const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll('.tab-contents');

// 

function openTab(tabname) {
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-links");
    });

    tabContents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tabs");
    });

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tabs");
}

let menuIcon = document.getElementById('menuIcon');
let list = document.getElementById("ul_side_menu");

// js pentru bara de navigare

function openSideMenu() {
    list.style.width = "80%";
    menuIcon.style.display = "none";
    list.style.transition = "width 0.5s";
}

function closeSideMenu(){
    menuIcon.style.display = "block";
    list.style.width = "0";
    menuIcon.style.display = "block";
    list.style.transition = "width 0.5s";
}

// button home

document.addEventListener('DOMContentLoaded', function () {
    var backButton = document.getElementById('back_to_header_btn');
    function toggleBackButton() {
        if (window.scrollY > 500) { 
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    }
    window.addEventListener('scroll', toggleBackButton);
    toggleBackButton();
});


// Full screen images
const overlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');

document.querySelectorAll('.clickable').forEach(img => {
    img.addEventListener('click', () => {
        fullscreenImage.src = img.src;
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});


