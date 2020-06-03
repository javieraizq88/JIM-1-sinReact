const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");


// al hacer click en la lupa abre y cierra un input
searchIcon.addEventListener("click", function() {
    if(searchBox.style.top == "72px") {
        searchBox.style.top = "24px";
        searchBox.style.pointerEvents = "none";
    } else {
        searchBox.style.top ="72px";
        searchBox.style.pointerEvents = "auto";
    }
});

// cuando esta en responsive, hacer click en menu y que se abra o cierre
menuIcon.addEventListener("click", function() {
    if (slideoutMenu.style.opacity == "1"){
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
    }
})

