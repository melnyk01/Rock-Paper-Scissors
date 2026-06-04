console.log("Hello World");
getComputerChoice = function() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

getHumanChoice = function() {
    const choice = Number(prompt("Please enter the number to play a Game: 1. Rock 2. Paper 3. Scissors"));
    return choice;
}

console.log(getComputerChoice())
getHumanChoice();