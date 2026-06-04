let humanScore = 0;
let computerScore = 0;

getComputerChoice = function() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch (num) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    
    return computerChoice;
}

getHumanChoice = function() {
    const choice = prompt("Please enter the item to play the Game:  Rock,  Paper or Scissors");
    console.log(choice);
    return choice.toLowerCase();
}

console.log(getComputerChoice())
getHumanChoice();

playRound = function(humanChoice, computerChoice) {


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

playGame = function();

playGame();
playGame();
playGame();
playGame();
playGame();