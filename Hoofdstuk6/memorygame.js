var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player1points = document.getElementById("player1points");
var player2points = document.getElementById("player2points");

var cardBack1 = document.getElementById("cards1");
var cardBack2 = document.getElementById("cards2");

var turn = document.getElementById("turn");
var card = document.getElementById("box");
turnCard();

var random = 0;
var randomNumbers = [];

while(randomNumbers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if(randomNumbers.lastIndexOf(random) === -1) {
        randomNumbers.push(random);
    }
}

function turnCard() {
    card.addEventListener("click", function (){
        cardBack2.style.visibility = 'invisible';
        cardBack1.style.visibility = 'invisible';
        card.style.backgroundImage = "url('img/monkey"+ random + ".jpg')";
        card.style.backgroundRepeat = "no-repeat";
        console.log(turnCard());
    });
}





