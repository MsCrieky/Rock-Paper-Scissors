const possibleChoices = document.querySelectorAll("button");
const playerAnswer = document.getElementById("user-choice");
const aiAnswer = document.getElementById("computer-choice");
let userPick;
let aiPick;

//Makes the button listen for clicks and put an event to it
possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userPick = e.target.id
    playerAnswer.innerHTML = userPick
    generateComputerChoice()

}))

//Creates the computer answer
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
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