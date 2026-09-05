//This file contains the javascript for buttons/clickable items


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const downGlyph = document.getElementById("downGlyph");
const profileSection = document.getElementById("profile");
const icons = document.querySelectorAll(".icon");
const moreBtns = document.querySelectorAll(".moreBtn");
const ellipses = document.querySelectorAll(".ellipses");
const moreText = document.querySelectorAll(".more");
const infoTabs = document.querySelectorAll('.nav-tabs [data-toggle="tab"]');


/* Controls the text-expanding "Read More" buttons */
function more(elem, index) {
    elem.addEventListener("click", function() {
        const isExpanded = ellipses[index].style.display === "none";

        if (isExpanded) {
            ellipses[index].style.display = "inline";
            elem.innerHTML = "Learn More"; 
            moreText[index].style.display = "none";
        } else {
            ellipses[index].style.display = "none";
            elem.innerHTML = "Read less"; 
            moreText[index].style.display = "inline";
        }

        elem.setAttribute("aria-expanded", String(!isExpanded));
    });
}
moreBtns.forEach(more);

// Allows the active About tab to be closed by clicking it again.
infoTabs.forEach(tab => {
    tab.addEventListener("click", function(event) {
        if (!tab.classList.contains("active")) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        const panel = document.querySelector(tab.getAttribute("href"));
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
        panel.classList.remove("active", "show");
    });
});

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
    profileSection.scrollIntoView({behavior: 'smooth'});
});
