const button = document.querySelector(".buttonnav");

button.addEventListener("click", function() {
    alert("Button Clicked!")
});

const links = document.querySelectorAll(".work-link");


links.forEach(link => {
    link.addEventListener("click", function(event) {
        alert("Traveling to the project page!");
    });
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

