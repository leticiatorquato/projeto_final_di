const botaoModo = document.getElementById("modoContraste");
const botaoFonte = document.getElementById("aumentarFonte");


let fonteAtual = 100;


if (botaoModo) {
    botaoModo.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}


if (botaoFonte) {
    botaoFonte.addEventListener("click", () => {
        fonteAtual += 10;


        if (fonteAtual > 150) {
            fonteAtual = 100;
        }
        document.documentElement.style.fontSize = fonteAtual + "%";
    });
}
