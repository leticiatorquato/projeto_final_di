document.addEventListener("DOMContentLoaded", () => {


    const track = document.getElementById("carousel-track");
    const slides = document.querySelectorAll(".slide");
    const btnNext = document.getElementById("next");
    const btnPrev = document.getElementById("prev");


    let index = 0;


    function moverCarrossel() {
        const larguraSlide = slides[0].offsetWidth;
        track.style.transform = `translateX(-${index * larguraSlide}px)`;
    }


    btnNext.addEventListener("click", () => {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        moverCarrossel();
    });


    btnPrev.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        moverCarrossel();
    });


    moverCarrossel();
});
