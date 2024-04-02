let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideWidth = slide[currentSlide].clientWidth;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slide.length;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 second
