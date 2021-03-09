//This file contains the javascript for buttons/clickable items


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const downGlyph = document.getElementById("downGlyph");

// Checks for user's color theme preference from previous visits
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

// Controls color mode change through toggle switch
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

// Scroll down to profile when down arrow on landing is clicked
downGlyph.addEventListener("click", function() {
    document.getElementById("profile").scrollIntoView({behavior: 'smooth'});
});
