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

playRound = function(humanChoice, computerChoice) {
        switch (humanChoice) {
            case 'rock':
                switch (computerChoice) {
                    case 'rock': 
                        console.log("Tie");
                        break;
                    case 'paper':
                        console.log("You loose!");
                        break;
                    case 'scissors':
                        console.log("You win!");
                        break;
                }
                break;
            case 'paper': 
                switch (computerChoice) {
                    case 'rock': 
                        console.log("You win!");
                        break;
                    case 'paper':
                        console.log("Tie");
                        break;
                    case 'scissors':
                        console.log("You loose!");
                        break;
                }
                break;
            case 'scissors': {
                switch (computerChoice) {
                    case 'rock': 
                        console.log("You loose!");
                        break;
                    case 'paper':
                        console.log("You win!");
                        break;
                    case 'scissors':
                        console.log("Tie");
                        break;
                }
                break;
            }
        }
  }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
