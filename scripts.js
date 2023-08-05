// create an array variable for choices
 const choices = ['rock','paper','scissors'];
console.log(choices);

// declare a function "getComputerChoice" to randomly select from the array
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];   
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // make if...else statements for the winner/loser. rock beats scissors
    // scissors beats paper and paper beats rock.
    // add scores to the winner of each round
    
  
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "You Lose! Paper beats Rock" ;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You Win! Rock beats Scissors" ;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You Win! Paper beats Rock" ;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return "You Lose! Scissors beats Paper" ;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You Win! Scissors beats Paper" ;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You Lose! Rock beats scissors" ;
    }
    else if (playerSelection === computerSelection) {
        return "It's a Tie! try again" ;
    }
    else if (playerSelection === ' ') {
        return "enter a choice" ;
    }
    else { return "enter the correct choice!" ;
    }
    
  }
  

  const computerSelection = getComputerChoice();
  let playerScore = 0 ;
  let computerScore = 0 ;

  // make loop to run the game 5 times and declare a winner for the higher scorer
 // loop inside the function game()
  function game(){
    for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter choice",).toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Your score is : ${playerScore}`);
    console.log(`Computer's score is : ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You are the Winner!");
    }
    else if (computerScore > playerScore) {
        console.log("You lose to CPU");
    }
    else if (computerScore = playerScore) {
        console.log("It's a tie, try again");
    }


}
  game();


  
