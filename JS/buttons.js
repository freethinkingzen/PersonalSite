const landing = document.getElementById("landing");
const coding = document.getElementById("coding");
const lifting = document.getElementById("lifting");
const phil = document.getElementById("philosophy");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const downGlyph = document.getElementById("downGlyph");
const profile = document.getElementById("profile");
const myName = document.querySelector("#myName");

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

lifting.addEventListener("mouseover", function(e) {
    landing.classList.add("liftingbg");
    
    coding.style.opacity = 0.6;
    phil.style.opacity = 0.6;
});
lifting.addEventListener("mouseleave", function(e) {
    landing.classList.remove("liftingbg");
    coding.style.opacity = 1;
    phil.style.opacity = 1;
});

coding.addEventListener("mouseover", function(e) {
    landing.classList.add("codingbg");
    lifting.style.opacity = 0.6;
    phil.style.opacity = 0.6;
});
coding.addEventListener("mouseleave", function(e) {
    landing.classList.remove("codingbg");
    lifting.style.opacity = 1;
    phil.style.opacity = 1;
});

phil.addEventListener("mouseover", function(e) {
    landing.classList.add("philbg");
    coding.style.opacity = 0.6;
    lifting.style.opacity = 0.6;
});
phil.addEventListener("mouseleave", function(e) {
    landing.classList.remove("philbg");
    coding.style.opacity = 1;
    lifting.style.opacity = 1;
});

toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}, false);

downGlyph.addEventListener("click", function() {
    document.getElementById("profile").scrollIntoView({behavior: 'smooth'});
});

window.addEventListener("scroll", function(e){
    //if(window.scrollY >= (profile.offsetTop - (0.5 * profile.scrollHeight)) && window.scrollY < (profile.offsetTop + (0.5 *profile.scrollHeight))){
    if(window.scrollY >= profile.offsetTop && window.scrollY < profile.offsetTop + 10){  
        myName.classList.add("neonFlicker");
        myName.querySelector("hr").classList.add("borderFlicker");
        setTimeout(() => {
            myName.classList.remove("neonFlicker");
            myName.querySelector("hr").classList.remove("borderFlicker");
        }, 5000);
    
    }
});

// Control Welcome Neon Animation
function welcomeAnimation() {
    var hover = new Event('mouseover');
    var leave = new Event('mouseleave');
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
    }, 9600);
    
}
window.onload = welcomeAnimation();