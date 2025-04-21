const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getChoiceName(choice)
{
    // convert a choice value to it's string
    let name = [ "Rock", "Paper", "Scissors" ];
    return name[choice];
}

function getComputerChoice()
{
    // get a random number between 0 and 2
    return Math.floor(Math.random() * 3);
}

function getHumanChoice()
{
    // get the player choice
    return parseInt(prompt("Choose Rock (1), Paper (2) or Scissors (3): ")) - 1;
}

function playRound(humanChoice, computerChoice)
{
    // convert choices to strings for UI
    let humanChoiceName = getChoiceName(humanChoice);
    let computerChoiceName = getChoiceName(computerChoice);

    // check win conditions
    if(humanChoice == ROCK && computerChoice == SCISSORS ||
       humanChoice == PAPER && computerChoice == ROCK || 
       humanChoice == SCISSORS && computerChoice == PAPER)
    {
        humanScore++;
        console.log(`You win! ${humanChoiceName} beats ${computerChoiceName}`);
    }
    // check lose conditions
    else if(computerChoice == ROCK && humanChoice == SCISSORS ||
            computerChoice == PAPER && humanChoice == ROCK || 
            computerChoice == SCISSORS && humanChoice == PAPER)
    {
        computerScore++;
        console.log(`You lose! ${computerChoiceName} beats ${humanChoiceName}`);
    }
    // otherwise, it's a draw
    else
    {
        console.log(`Draw! ${computerChoiceName} - ${humanChoiceName}`);
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
        console.log(`You win overall! (${humanScore}-${computerScore})`);
    }
    else if(humanScore < computerScore)
    {
        console.log(`You lose overall! (${humanScore}-${computerScore})`);
    }
    else
    {
        console.log(`It's a draw! (${humanScore}-${computerScore})`);
    }
}

playGame();
