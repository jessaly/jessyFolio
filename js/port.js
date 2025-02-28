function openTab(tabName, element) {
    let contents = document.querySelectorAll(".contents");
    let links = document.querySelectorAll(".links");

    // Hide all content sections
    contents.forEach(content => {
        content.classList.remove("active");
    });

    // Remove 'active' class from all links
    links.forEach(link => {
        link.classList.remove("active");
    });

    // Show the selected tab and highlight the active link
    document.getElementById(tabName).classList.add("active");
    element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});