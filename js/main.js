const btn = document.querySelectorAll(".btn");
let userChoice, botChoice, round = 0, humanScore = 0, botScore = 0, gameOver = false;
const result = document.querySelector("#result");
const showRound = document.querySelector("#round");
const showHumanScore = document.querySelector("#human-score");
const showBotScore = document.querySelector("#bot-score");

btn.forEach(btn => {
    btn.addEventListener("click", function (event) {
        userChoice = event.target.id;
        botChoice = botPlay()
        playGame();
    })
});

function botPlay() {
    const number = Math.ceil(Math.random() * 3);
    if (number === 1) {
        return 'rock';
    }
    if (number === 2) {
        return 'paper';
    }
    return 'scissors';
}


function playGame() {
    if (round < 10) {
        gameOver = true;
        winner(userChoice, botChoice);
    }
    if (round == 10) {
        if (humanScore > botScore) {
            result.innerHTML = `<h1 class="green">Game over! </h1> You scored ${humanScore} Bot scored ${botScore} <br> You won`;
        }
        else if (humanScore == botScore) {
            result.innerHTML = `<h1 class="blue">Game over! </h1> You scored ${humanScore} Bot scored ${botScore} <br> It's a tie!`;
        }
        else {
            result.innerHTML = `<h1 class="red">Game over!</h1> You scored You scored ${humanScore} Bot scored ${botScore} <br> You lost`;
        }
        resetGame();
    }
}

function winner(userChoice, botChoice) {
    if (
        (userChoice == "rock" && botChoice == "rock") ||
        (userChoice == "paper" && botChoice == "paper") ||
        (userChoice == "scissors" && botChoice == "scissors")
    ) {
        result.textContent = `It's a tie!`;
        round++;
        showRound.textContent = round;
    } else if (
        (userChoice == "rock" && botChoice == "paper") ||
        (userChoice == "paper" && botChoice == "scissors") ||
        (userChoice == "scissors" && botChoice == "rock")
    ) {
        round++;
        botScore++;
        showBotScore.textContent = botScore;
        result.textContent = `You lost this round! ${botChoice} beats ${userChoice}`;
        showRound.textContent = round;
    }
    else {
        round++;
        humanScore++;
        showHumanScore.textContent = humanScore;
        result.textContent = `You won this round! ${userChoice} beats ${botChoice}`;
        showRound.textContent = round;
    }

}

function resetGame() {
    round = 0;
    humanScore = 0;
    botScore = 0;
}
