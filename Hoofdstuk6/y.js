const memoryCards = document.querySelectorAll(".box");

let hasFlippedCard = false;
let firstCard, secondCard;
let player1 = document.getElementById('player1points');
let player1pointscore = 0;
let player2 = document.getElementById('player2points');
let player2pointscore = 0;

var turnCount = 0;
var winner = null;
var thewinner = document.getElementById("thewinner");

memoryCardShow();
turn();
turn = document.getElementById("turn");


turn.style.visibility = 'visible';

(function random() {
    memoryCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function turn() {
    turnCount++
    if (turnCount % 2) {
        playerbeurt = document.getElementById("turn").innerHTML = "Player 1 ";
    }
    else {
        playerbeurt = document.getElementById("turn").innerHTML = "Player 2 ";
    }
    turn.innerHTML = playerbeurt;
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard());
    secondCard.removeEventListener('click', flipCard());
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBtn();
    }, 1500);

    turn();
}

function checkForMatch() {
    let isMatch
    if ( isMatch = firstCard.dataset.framework === secondCard.dataset.framework) {
        playerscore();
    }

    isMatch ? disableCards() : unflipCards();
}

function playerscore() {
    if (turnCount % 2) {
        player2pointscore +=1;
        player2.innerHTML = player2pointscore;
    }
    else  {
        player1pointscore +=1;
        player1.innerHTML = player1pointscore;
    }
    endgame();
}

function endgame() {
    if (player1pointscore + player2pointscore < 10) {

    } else {
        whowon();
    }

}

function whowon() {
    if (player1pointscore > player2pointscore) {
        winner = player1getname + " is de Winnaar";
    }
    else {
        winner = player2getname + " is de Winnaar";
    }
    console.log(winner);
    thewinner.innerHTML = winner;
    thewinner.style.visibility = 'visible'
    turn.style.visibility = 'hidden'
}


function memoryCardShow() {
    memoryCard1 = document.getElementById("box1")
    memoryCard1.addEventListener("click", function (){
        memoryCard1.style.backgroundImage = "url('img/monkey1.jpg')";

        console.log("het werkt");
    });
}

function chosenCard() {
    chosenCard = document.getElementById("box1")
    chosenCard.style.backgroundImage = "url('img/monkey1.jpg')";
}

function resetBtn() {
    knop = document.getElementById("knop");
    knop.addEventListener("click", function () {
        knop.style.display = "block";
        location.reload();
        return false;
    });
}

//als je op een kaart klikt komt er een animatie die omdraait waardoor je het plaatje ziet.