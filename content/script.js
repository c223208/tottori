let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // 3秒ごとにスライドを変更