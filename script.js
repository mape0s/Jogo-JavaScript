document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const tema = urlParams.get("tema");

    let imagens = [];

    if (tema == "carro") {
        imagens = [
            "carro01.png", "carro02.png", "carro03.png", "carro04.png","carro01.png", "carro02.png", "carro03.png", "carro04.png",
        ];
    } else if (tema == "moto") {
        imagens = [
            "moto01.png", "moto02.png", "moto03.png", "moto04.png","moto01.png", "moto02.png", "moto03.png", "moto04.png",
        ];
    } else if (tema == "jetski") {
        imagens = [
            "jet01.png", "jet02.png", "jet03.png", "jet04.png", "jet01.png", "jet02.png", "jet03.png", "jet04.png",
        ];
    } else {
                imagens = [
            "carro01.png", "carro02.png", "carro03.png", "carro04.png","carro01.png", "carro02.png", "carro03.png", "carro04.png",
        ];
    }

    const board = document.getElementById("game-board");
    
    if (board) {


        board.innerHTML = '';

        for (var i = 0; i < imagens.length; i++) {
            var card = document.createElement('div');
            card.className = 'card';
            
            var img = document.createElement('img');
            img.src = imagens[i];
            
            var verso = document.createElement('div');
            verso.className = 'verso';
            
            card.appendChild(verso);
            card.appendChild(img);
            card.onclick = function() {

                this.classList.toggle('virada');
            };
            
            board.appendChild(card);
        }
    }
});