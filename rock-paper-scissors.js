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
}

function playGame()
{
    let rounds = 5;

    // score variables
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < rounds; i++)
    {
        // player choices
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // declare winner
    if(humanScore > computerScore)
    {
        console.log("You win! (" + humanScore + "-" + computerScore + ")");
    }
    else if(humanScore < computerScore)
    {
        console.log("You lose! (" + humanScore + "-" + computerScore + ")");
    }
    else
    {
        console.log("It's a draw! (" + humanScore + "-" + computerScore + ")");
    }
}

playGame();
