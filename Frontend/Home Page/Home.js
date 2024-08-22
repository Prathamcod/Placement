document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
        document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function initializeSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        setInterval(showNextSlide, 3000); // Change slide every 3 seconds
    }

    initializeSlider();

    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
