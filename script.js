const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }}

showSlide();
setInterval(showSlide, 3000);
