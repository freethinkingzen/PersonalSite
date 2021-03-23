//This file contains the javascript for buttons/clickable items


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const downGlyph = document.getElementById("downGlyph");
const codingPage = document.getElementById("codingPage");
const icons = document.querySelectorAll(".icon");
const navlinks = document.querySelectorAll("nav li");
const moreBtn = document.getElementById("moreBtn");

// Controls readmore on paragraphs
moreBtn.addEventListener("click", function() {
    var ellipses = document.getElementById("ellipses");
    var more = document.getElementById("more");

    if (ellipses.style.display === "none") {
        ellipses.style.display = "inline";
        moreBtn.innerHTML = "Continue Reading"; 
        more.style.display = "none";
  } else {
    ellipses.style.display = "none";
    moreBtn.innerHTML = "Read less"; 
    more.style.display = "inline";
  }
})

// Checks for user's color theme preference from previous visits
icons.forEach(icon => {
    icon.classList.add("invert");
});

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
    codingPage.scrollIntoView({behavior: 'smooth'});
});