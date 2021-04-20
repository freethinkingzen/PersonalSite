/*  This file contains the javascript for the neon flicker behaviour
    throughout the site
*/

const landing = document.getElementById("landing");
const coding = document.getElementById("coding");
const lifting = document.getElementById("lifting");
const phil = document.getElementById("philosophy");
const profile = document.getElementById("profile");
const warning = document.getElementById("warning");
const pageHeaders = document.getElementsByClassName("pageHeading");
const landingTitles = {"codingbg": coding,"liftingbg": lifting, "philbg": phil};

// Detects mouseover landing page h1 to change background
function bgFlicker(bg, e) {
    e.addEventListener("mouseover", function() {
        landing.classList.add(bg);
        e.classList.add("neonFlicker");
    });
    e.addEventListener("mouseleave", function() {
        landing.classList.remove(bg);
        e.classList.remove("neonFlicker");
    });
}

// Loops through h1s on landing to set up listeners for bg changes


// Activates neon on profile page h1 when it scrolls into view
window.addEventListener("scroll", function(e){

    if(window.scrollY >= profile.offsetTop - 50 && window.scrollY < (profile.offsetTop + profile.scrollHeight)){
        pageHeaders[0].classList.add("neonFlicker");
        pageHeaders[0].querySelector("hr").classList.add("borderFlicker");
        setTimeout(() => {
            pageHeaders[0].classList.remove("neonFlicker");
            pageHeaders[0].querySelector("hr").classList.remove("borderFlicker");
        }, 5000);
    
    }
    if(window.scrollY >= expPage.offsetTop - 50 && window.scrollY < (expPage.offsetTop + expPage.scrollHeight)){
        pageHeaders[1].classList.add("neonFlicker");
        pageHeaders[1].querySelector("hr").classList.add("borderFlicker");
        setTimeout(() => {
            pageHeaders[1].classList.remove("neonFlicker");
            pageHeaders[1].querySelector("hr").classList.remove("borderFlicker");
        }, 5000);
    }
});

// Control Welcome Neon Animation
function welcomeAnimation() {
    var hover = new Event('mouseover');
    var leave = new Event('mouseleave');

    coding.classList.add("disableHover");
    lifting.classList.add("disableHover");
    phil.classList.add("disableHover");
    //landing.classList.add("disableHoverClicks");
    setTimeout(() => {
        coding.style.visibility = "visible";
        coding.dispatchEvent(hover);
    }, 3000);
    setTimeout(() => {
        coding.style.visibility = "hidden";
        coding.dispatchEvent(leave);
    }, 5200);
    setTimeout(() => {
        lifting.style.visibility = "visible";
        lifting.dispatchEvent(hover);
    }, 5400);
    setTimeout(() => {
        lifting.style.visibility = "hidden";
        lifting.dispatchEvent(leave);
    }, 7400);
    setTimeout(() => {
        phil.style.visibility = "visible";
        phil.dispatchEvent(hover);
    }, 7600);
    setTimeout(() => {
        phil.style.visibility = "hidden";
        phil.dispatchEvent(leave);
    }, 9600);
    setTimeout(() => {
        coding.style.visibility = "visible";
        lifting.style.visibility = "visible";
        phil.style.visibility = "visible";
        coding.classList.add("neonFlicker");
        lifting.classList.add("neonFlicker");
        phil.classList.add("neonFlicker");
    }, 10000);
    setTimeout(() => {
        coding.classList.remove("neonFlicker");
        lifting.classList.remove("neonFlicker");
        phil.classList.remove("neonFlicker");
        coding.classList.remove("disableHover");
        lifting.classList.remove("disableHover");
        phil.classList.remove("disableHover");
        
    }, 11600);
    
}
window.onload = function(){
    for(i in landingTitles) {
        bgFlicker(i, landingTitles[i]);
    }
    welcomeAnimation();
}