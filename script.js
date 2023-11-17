// navbar toggle
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');

    if(navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
        navbar.classList.add("navTrans");

    }
    else{
        navbar.classList.add("hidden");
        toggleIcon.classList.add("fa-bars");
        toggleIcon.classList.remove("fa-times");
    }
}

