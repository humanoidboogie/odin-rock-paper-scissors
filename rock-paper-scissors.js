function getChoice(choice)
{
    // setup the choices array
    let choices = [ "Rock", "Paper", "Scissors" ];

    // return the relevant choice
    return choices[choice];
}

function getComputerChoice()
{
    // get a random number between 0 and 2
    let randomChoice = Math.floor(Math.random() * 3);
    
    return getChoice(randomChoice);
}

function getHumanChoice()
{
    // get the player choice and subtract 1 to get to a choice index
    let choice = prompt("Choose Rock (1), Paper (2) or Scissors (3): ") - 1;

    return getChoice(choice);
}

// score variables
let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice());
console.log(getComputerChoice());