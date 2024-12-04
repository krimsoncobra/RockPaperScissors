let playerChoice = "";
let playerScore = 0;

let compChoice = "";
let compScore = 0;

let result = "";


function getPlayerChoice() {
    const userInput = prompt("Rock, Paper, or Scissors?")
    const isValidUserInput =
        userInput.toLowerCase() === "rock" ||
        userInput.toLowerCase() === "paper" ||
        userInput.toLowerCase() === "scissors";

        if (isValidUserInput) {
            playerChoice = userInput.toLowerCase();
        }
        else {
            alert("invalid choice try again...");
            getPlayerChoice();
        }
    }
}

function getCompChoice() {
    const choice = math.floor(math.random *3);

    switch(choice) {
        case 0:
            compChoice = rock;
        case 1: 
            compChoice = paper;
        case 2: 
        compChoice = scissors;
    }
}

function compare() {
    if (
    (playerChoice === "rock" && compChoice === "paper") ||
    (playerChoice === "paper" && compChoice === "scissors") ||
    (playerChoice === "scissors" && compChoice === "rock")
    ) {
        compScore ++;
        result = "Computer Wins!";
    }
    else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")
    ) {
        playerScore ++;
        result = "Player Wins!"
    }
    else {
        result = "It's a draw!"
    }

}
