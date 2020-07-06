let roundScore = 0, userScore = 0, botScore = 0, tie = 0, userChoice, botChoice, result, play;

play = document.querySelectorAll(".play").forEach(button => {
    button.addEventListener("click", (e) => {

        result = document.querySelector(".result");
        userScoreDisplay = document.querySelector(".userScore");
        botScoreDisplay = document.querySelector(".botScore");
        tieScoreDisplay = document.querySelector("#tie");
        roundScoreDisplay = document.querySelector(".roundScore");
        userImage = document.querySelector("#user-selected-img");
        botImage = document.querySelector("#bot-selected-img");

        userChoice = e.target.id;
        botChoice = Math.ceil(Math.random() * 3);

        if (userChoice == botChoice) {
            tie++;
            result.textContent = "You Tied!";
            tieScoreDisplay.innerText = tie;
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);

        } else if (userChoice == 1 & botChoice == 2) {
            botScore++;
            botScoreDisplay.innerText = botScore;
            result.textContent = "You Lost!";
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);

        } else if (userChoice == 1 & botChoice == 3) {
            userScore++
            userScoreDisplay.innerText = userScore;
            result.textContent = "You won!";
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);

        } else if (userChoice == 2 & botChoice == 1) {
            userScore++
            userScoreDisplay.innerText = userScore;
            result.textContent = "You won!";
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);

        } else if (userChoice == 2 & botChoice == 3) {
            botScore++;
            botScoreDisplay.innerText = botScore;
            result.textContent = "You Lost!";
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);

        } else if (userChoice == 3 & botChoice == 1) {
            botScore++;
            botScoreDisplay.innerText = botScore;
            result.textContent = "You Lost!";
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);

        } else if (userChoice == 3 & botChoice == 2) {
            userScore++
            userScoreDisplay.innerText = userScore;
            result.textContent = "You won!";
            userImage.setAttribute("src", `images/${userChoice}.jpg`);
            botImage.setAttribute("src", `images/${botChoice}.jpg`);
        }

        roundScore++;
        roundScoreDisplay.innerText = roundScore;
    })
})


