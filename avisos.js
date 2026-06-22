document.addEventListener("DOMContentLoaded", () => {


    const container = document.getElementById("avisos-container");
    const track = document.getElementById("avisos-track");
    const slides = document.querySelectorAll(".aviso-slide");


    const btnNext = document.getElementById("aviso-next");
    const btnPrev = document.getElementById("aviso-prev");


    let index = 0;


    function moverAvisos() {
        const largura = container.clientWidth;
        track.style.transform = `translateX(-${index * largura}px)`;
    }


    btnNext.addEventListener("click", () => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        moverAvisos();
    });


    btnPrev.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        moverAvisos();
    });


    window.addEventListener("resize", moverAvisos);


    moverAvisos();
});
