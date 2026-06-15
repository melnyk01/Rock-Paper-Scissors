let humanScore = 0;
let computerScore = 0;
let btnRock = document.querySelector("#Rock");
let btnPaper = document.querySelector("#Paper");
let btnScissors = document.querySelector("#Scissors");
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
btnRock.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});

playRound = function(humanChoice, computerChoice) {
        switch (humanChoice) {
            case 'rock':
                switch (computerChoice) {
                    case 'rock': 
                        console.log("Tie! Nobody is getting a point!");
                        
                        break;
                    case 'paper':
                        console.log("You loose!");
                        computerScore++;
                        break;
                    case 'scissors':
                        console.log("You win!");
                        humanScore++;
                        break;
                }
                break;
            case 'paper': 
                switch (computerChoice) {
                    case 'rock': 
                        console.log("You win!");
                        humanScore++;
                        break;
                    case 'paper':
                        console.log("Tie! Nobody is getting a point!");
                        break;
                    case 'scissors':
                        console.log("You loose!");
                        computerScore++;
                        break;
                }
                break;
            case 'scissors': {
                switch (computerChoice) {
                    case 'rock': 
                        console.log("You loose!");
                        computerScore++;
                        break;
                    case 'paper':
                        console.log("You win!");
                        humanScore++;
                        break;
                    case 'scissors':
                        console.log("Tie! Nobody is getting a point!");
                        break;
                }
                break;
            }
        }
  }

playGame = function() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current score: \nHuman: ${humanScore} vs Computer ${computerScore}`);  
 }

// playGame();