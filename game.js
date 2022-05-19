function playRound(playerSelection, computerSelection) {
    // your code here!
    switch(playerSelection){
        case "rock":
            if (computerSelection == "rock") {
                return "You tie! Rock bounces off of rock!";
            } else if (computerSelection == "paper"){
                return "You lose! Paper wraps rock!";
            } else {
                return "You win! Rock breaks scissors!";
            }   
        case "paper":
            if (computerSelection == "rock") {
                return "You win! Paper covers rock!";
            } else if (computerSelection == "paper") {
                return "You tie! Paper bounces off of paper!";
            } else {
                return "You lose! Scissors cut paper!";
            }
        case "scissors":
            if (computerSelection == "rock") {
                return "You lose! Rock breaks scissors";
            } else if (computerSelection == "paper"){
                return "You win! Scissors cut paper!";
            } else {
                return "You tie! Scissors bounce off of scissors!";
            }
    };
    
  }
  
 function computerPlay(){
     let computerSelection;
     
     computerSelection = Math.floor((Math.random()*3)+1);
     
     switch(computerSelection){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
     };
     
 } 

 function playerPlay (){
     let playerEntry;

     playerEntry = prompt("Please enter your weapon", "rock, paper, or scissors?");
     playerEntry = playerEntry.toLowerCase();

     return playerEntry;
 }

function game(){
    let playerScore;
    let computerScore;
    let playerSelection;
    let computerSelection;
    let result;

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){

    
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.substring(0, 8) == "You win!"){
            playerScore++;
        } else if (result.substring(0, 8) == "You lose") {
            computerScore++;
        }
    }

    if (playerScore > computerScore){
        console.log(`You beat the computer ${playerScore} to ${computerScore}!`);
    } else if (computerScore > playerScore){
        console.log(`You lost to the computer ${computerScore} to ${playerScore}`);
    } else {
        console.log(`You tied with the computer ${playerScore} to ${computerScore}`);
    }
 }

 game();
 //for (let i = 0; i < 5; i++){
//
 // const playerSelection = playerPlay();
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));
  
 //}