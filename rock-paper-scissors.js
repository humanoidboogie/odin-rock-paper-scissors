function getComputerChoice()
{
    // get a random number between 0 and 2
    let rnd = Math.floor(Math.random() * 3);
    
    // setup the choices array
    let choices = [ "Rock", "Paper", "Scissors" ];

    // return the relevant choice
    return choices[rnd];
}

console.log(getComputerChoice());