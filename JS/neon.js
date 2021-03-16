/*  This file contains the javascript for the neon flicker behaviour
    throughout the site
*/

const landing = document.getElementById("landing");
const coding = document.getElementById("coding");
const lifting = document.getElementById("lifting");
const phil = document.getElementById("philosophy");
const profile = document.getElementById("profile");
const pageHeaders = document.getElementsByClassName("pageHeading");
const profileNav = document.getElementById("profileNav")
const landingTitles = {"codingbg": coding,"liftingbg": lifting, "philbg": phil};

// Detects mouseover landing page h1 to change background
function bgFlicker(bg, e) {
    e.addEventListener("mouseover", function() {
        landing.classList.add(bg);
        e.classList.add("neonFlicker");
        setTimeout(() => {
            landing.classList.remove(bg);
            e.classList.remove("neonFlicker");
        }, 3000);
    });
    e.addEventListener("mouseleave", function() {
        landing.classList.remove(bg);
        e.classList.remove("neonFlicker");
    });
}

// Loops through h1s on landing to set up listeners for bg changes
for(i in landingTitles) {
    bgFlicker(i, landingTitles[i]);
}

// Activates neon on profile page h1 when it scrolls into view
window.addEventListener("scroll", function(e){
    if(window.scrollY >= profile.offsetTop -5 && window.scrollY < (profile.offsetTop + profile.scrollHeight)){  
        pageHeaders[0].classList.add("neonFlicker");
        pageHeaders[0].querySelector("hr").classList.add("borderFlicker");
        setTimeout(() => {
            pageHeaders[0].classList.remove("neonFlicker");
            pageHeaders[0].querySelector("hr").classList.remove("borderFlicker");
        }, 5000);
    
    }
    if(window.scrollY >= codingPage.offsetTop -5 && window.scrollY < (codingPage.offsetTop + codingPage.scrollHeight)){
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

    coding.classList.add("disableHoverClicks");
    lifting.classList.add("disableHoverClicks");
    phil.classList.add("disableHoverClicks");
    //landing.classList.add("disableHoverClicks");
    setTimeout(() => {
        coding.dispatchEvent(hover);
        coding.classList.add("neonFlicker");
    }, 2000);
    setTimeout(() => {
        coding.dispatchEvent(leave);
        coding.classList.remove("neonFlicker");
    }, 4200);
    setTimeout(() => {
        lifting.dispatchEvent(hover);
        lifting.classList.add("neonFlicker");
    }, 4400);
    setTimeout(() => {
        lifting.dispatchEvent(leave);
        lifting.classList.remove("neonFlicker");
    }, 6400);
    setTimeout(() => {
        phil.dispatchEvent(hover);
        phil.classList.add("neonFlicker");
    }, 6600);
    setTimeout(() => {
        phil.dispatchEvent(leave);
        phil.classList.remove("neonFlicker");
    }, 8600);
    setTimeout(() => {
        coding.classList.add("neonFlicker");
        lifting.classList.add("neonFlicker");
        phil.classList.add("neonFlicker");  
    }, 8610);
    setTimeout(() => {
        coding.classList.remove("neonFlicker");
        lifting.classList.remove("neonFlicker");
        phil.classList.remove("neonFlicker");
        coding.classList.remove("disableHoverClicks");
        lifting.classList.remove("disableHoverClicks");
        phil.classList.remove("disableHoverClicks");
    }, 9600);
    
}
window.onload = welcomeAnimation();