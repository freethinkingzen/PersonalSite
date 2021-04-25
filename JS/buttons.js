//This file contains the javascript for buttons/clickable items


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const downGlyph = document.getElementById("downGlyph");
const codingPage = document.getElementById("codingPage");
const icons = document.querySelectorAll(".icon");
const navlinks = document.querySelectorAll("nav li");
const moreBtns = document.querySelectorAll(".moreBtn");
const ellipses = document.querySelectorAll(".ellipses");
const moreText = document.querySelectorAll(".more");
const proceed = document.getElementById("proceedBtn");


/* Controls the text-expanding "Read More" buttons */
function more(elem, index) {
    elem.addEventListener("click", function() {
        if (ellipses[index].style.display === "none") {
            ellipses[index].style.display = "inline";
            elem.innerHTML = "Learn More"; 
            moreText[index].style.display = "none";
        } else {
            ellipses[index].style.display = "none";
            elem.innerHTML = "Read less"; 
            moreText[index].style.display = "inline";
        }
    });
}
moreBtns.forEach(more);

icons.forEach(icon => {
    icon.classList.add("invert");
});

// Checks for user's color theme preference from previous visits
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if(currentTheme === 'light') {
        toggleSwitch.checked = true;
        icons.forEach(icon => {
            icon.classList.remove("invert");
        });
    }
}

// Controls color mode change through toggle switch
toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icons.forEach(icon => {
            icon.classList.remove("invert");
        });
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icons.forEach(icon => {
            icon.classList.add("invert");
        });
    }
}, false);

// Scroll down to profile when down arrow on landing is clicked
downGlyph.addEventListener("click", function() {
    profile.scrollIntoView({behavior: 'smooth'});
});

// Scroll based on navigation selection
navlinks[0].addEventListener("click", function() {
    profile.scrollIntoView({behavior: 'smooth'});
});
navlinks[1].addEventListener("click", function() {
    projPage.scrollIntoView({behavior: 'smooth'});
});
navlinks[2].addEventListener("click", function() {
    expPage.scrollIntoView({behavior: 'smooth'});
});
navlinks[3].addEventListener("click", function() {
    skillPage.scrollIntoView({behavior: 'smooth'});
});
