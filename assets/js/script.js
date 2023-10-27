const possibleChoices = document.querySelectorAll("button");
const playerAnswer = document.getElementById("user-choice");
const aiAnswer = document.getElementById("computer-choice");
const resultView = document.getElementById("result");
let userPick;
let aiPick;
let result;

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
            aiPick = "ROCK";
            break;
        case 2:
            aiPick = "SCISSORS";
            break;
        case 3:
            aiPick = "PAPER";
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
        (aiPick === "ROCK" && userPick === "SCISSORS") ||
        (aiPick === "PAPER" && userPick === "ROCK") ||
        (aiPick === "SCISSORS" && userPick === "PAPER")
    ) {
        result = "Oh No... You Lose!";
    } else {
        result = "Yeah, You Win!";
    }
    resultView.innerHTML = result;

}

// Opens an alert when the player clicks ?
const howToPlayButton = document.getElementById("how-to-play");

howToPlayButton.addEventListener("click", function() {
    console.log("Button clicked!");
    alert('Rock - Paper - Scissors is a game you play against the Computer. You make a choice by pressing one of the buttons further down the page. The Computer will make his choice and the result will be displayed by the Game Result. Good Luck !');

});