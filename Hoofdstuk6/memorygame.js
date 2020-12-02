const cards = document.querySelectorAll('.memory-card');

var turnCount = 1;
var winner = null;
var playerTurn = null;
var theWinner = document.getElementById("thewinner");
var theTurn = document.getElementById("turn");
turn();

var hasFlippedCard = false;
var freezeBoard = false;
var firstCard, secondCard;
var player1 = document.getElementById('player1points');
var player1score = 0;
var player2 = document.getElementById('player2points');
var player2score = 0;


function flipCard() {
    if (freezeBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkIfDuplicate();
}

function checkIfDuplicate() {
    let isMatch
    if ( isMatch = firstCard.dataset.framework === secondCard.dataset.framework) {
        score();
    }

    isMatch ? turnBackCards() : unFlipCards();
}

function turnBackCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards() {
    freezeBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
    turn();
}

function resetBoard() {
    [hasFlippedCard, freezeBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function random() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function turn() {
    turnCount++
    if (turnCount % 2) {
        playerTurn = "Player 2..";
    }
    else {
        playerTurn = "Player 1..";
    }
    theTurn.innerHTML = playerTurn;
    console.log(turnCount);
}

function score() {
    if (turnCount % 2) {
        player2score +=1;
        player2.innerHTML = player2score;
    }
    else  {
        player1score +=1;
        player1.innerHTML = player1score;
    }
    endGame();
}

function endGame() {
    if (player1score + player2score < 9) {

    } else {
        whoWon();
    }

}

function whoWon() {
    if (player1score > player2score) {
        winner = "Player 1 won the game!";
    }
    else if ((player1score < player2score)){
        winner = "Player 2 won the game!";
    }
    else {
        winner = "Tied game";
    }
    console.log(winner);
    theWinner.innerHTML = winner;
    theWinner.style.visibility = 'visible'
    theTurn.style.visibility = 'hidden'
}

cards.forEach(card => card.addEventListener('click', flipCard));