let humanScore = 0;
let computerScore = 0;
let btnRock = document.querySelector("#Rock");
let btnPaper = document.querySelector("#Paper");
let btnScissors = document.querySelector("#Scissors");
let rndResult = document.querySelector("#rndResult");
let result = document.querySelector('#result');
let winner = document.querySelector('#winner');
let restart = document.querySelector('#restart');
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
                        rndResult.textContent = "Tie! Nobody is getting a point!";
                        
                        break;
                    case 'paper':
                        rndResult.textContent = "You loose!";
                        computerScore++;
                        break;
                    case 'scissors':
                        rndResult.textContent = "You win!";
                        humanScore++;
                        break;
                }
                break;
            case 'paper': 
                switch (computerChoice) {
                    case 'rock': 
                        rndResult.textContent = "You win!";
                        humanScore++;
                        break;
                    case 'paper':
                        rndResult.textContent = "Tie! Nobody is getting a point!";
                        break;
                    case 'scissors':
                        rndResult.textContent = "You loose!";
                        computerScore++;
                        break;
                }
                break;
            case 'scissors': {
                switch (computerChoice) {
                    case 'rock': 
                        rndResult.textContent = "You loose!";
                        computerScore++;
                        break;
                    case 'paper':
                        rndResult.textContent = "You win!";
                        humanScore++;
                        break;
                    case 'scissors':
                        rndResult.textContent = "Tie! Nobody is getting a point!";
                        break;
                }
                break;
            }
        }
        result.textContent = `Current score: \nHuman: ${humanScore} vs Computer ${computerScore}`
        if (humanScore == 5) {
            winner.textContent = `Congratulations, you won!`;
            restart.textContent = 'To play another game refresh a page'

        } else if (computerScore == 5) {
            winner.textContent = 'Oh noo, you loose, what a shame!';
            restart.textContent = 'To play another game refresh a page';
        }
  }

playGame = function() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current score: \nHuman: ${humanScore} vs Computer ${computerScore}`);  
 }

// playGame();