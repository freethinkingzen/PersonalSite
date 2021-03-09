const landing = document.getElementById("landing");
const coding = document.getElementById("coding");
const lifting = document.getElementById("lifting");
const phil = document.getElementById("philosophy");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const downGlyph = document.getElementById("downGlyph");
const profile = document.getElementById("profile");
const myName = document.querySelector("#myName");

const bgElement = [coding, lifting, phil];
const backgrounds = {"codingbg": coding,"liftingbg": lifting, "philbg": phil};

function bgFlicker(bg, e) {
    e.addEventListener("mouseover", function() {
        landing.classList.add(bg);
    
    //coding.style.opacity = 0.6;
    //phil.style.opacity = 0.6;
    });
    e.addEventListener("mouseleave", function() {
        landing.classList.remove(bg);
        //coding.style.opacity = 1;
        //phil.style.opacity = 1;
    });
}

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

for(let i in backgrounds) {
    bgFlicker(i, backgrounds[i]);
    console.log(i, backgrounds[i]);
}

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