const possibleChoices = document.querySelectorAll("button");
const playerAnswer = document.getElementById("user-choice");
const aiAnswer = document.getElementById("computer-choice");
const resultView = document.getElementById("result");
//Variables to add points to the score area
const yourScoreDisplay = document.getElementById("your-score");
const computerScoreDisplay = document.getElementById("computer-score");
let userPick;
let aiPick;
let result;
let yourScore = 0;
let computerScore = 0;

//Makes the button listen for clicks and put an event to it
possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userPick = e.target.id;
    playerAnswer.innerHTML = userPick;
    generateComputerChoice();
    getResult();
}));

//Creates the computer answer
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            aiPick = "rock";
            break;
        case 2:
            aiPick = "scissors";
            break;
        case 3:
            aiPick = "paper";
            break;
        default:
            aiPick = " "; //Default, incase someting wierd happens
    }
    aiAnswer.innerHTML = aiPick;
}

//Generates the result of the game
function getResult() {
    if (aiPick === userPick) {
        result = "Its a Draw... Play it again Sam!";
    } else if (
        (aiPick === "rock" && userPick === "scissors") ||
        (aiPick === "paperPER" && userPick === "rock") ||
        (aiPick === "scissors" && userPick === "paper")
    ) {
        result = "Oh No... You Lose!";
        computerScore++;
    } else {
        result = "Yeah, You Win!";
        yourScore++;
    }
    resultView.innerHTML = result;
    yourScoreDisplay.textContent = yourScore;
    computerScoreDisplay.textContent = computerScore;
}

// Opens an alert when the player clicks ?
const howToPlayButton = document.getElementById("how-to-play");

howToPlayButton.addEventListener("click", function() {
    console.log("Button clicked!");
    alert('Rock - Paper - Scissors is a game you play against the Computer. You make a choice by pressing one of the buttons further down the page. The Computer will make his choice and the result will be displayed by the Game Result. Good Luck !');

});