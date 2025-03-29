let index = 0;
const slides = document.querySelectorAll(".carousel-item");

function changeSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    index = (index + 1) % slides.length;
}

setInterval(changeSlide, 3000);
