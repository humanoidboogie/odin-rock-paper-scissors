function getComputerChoice()
{
    // get a random number between 0 and 2
    let randomChoice = Math.floor(Math.random() * 3);

    // setup the choices array
    let choices = [ "rock", "paper", "scissors" ];
    
    // return the relevant choice
    return choices[randomChoice];
}

function getHumanChoice()
{
    // get the player choice
    return prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "rock" && computerChoice == "scissors" ||
       humanChoice == "paper" && computerChoice == "rock" || 
       humanChoice == "scissors" && computerChoice == "paper")
    {
        humanScore++;
        console.log("You win! " + humanChoice.toUpperCase() + " beats " + computerChoice.toUpperCase());
    }
    else if(computerChoice == "rock" && humanChoice == "scissors" ||
       computerChoice == "paper" && humanChoice == "rock" || 
       computerChoice == "scissors" && humanChoice == "paper")
    {
        computerScore++;
        console.log("You lose! " + computerChoice.toUpperCase() + " beats " + humanChoice.toUpperCase());
    }
    else
    {
        console.log("Draw!");
    }

    console.log(humanScore);
    console.log(computerScore);
}

// score variables
humanScore = 0;
computerScore = 0;

// player choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);