const choices = ['rock','paper','scissors'];
let computerSelection = getComputerChoice();
  let playerScore = 0 ;
  let computerScore = 0 ;
  let playerSelection;
  let player = document.querySelectorAll('.butt');

  let computer = document.querySelector('.comp');
let players = document.querySelector('.player');
let finish = document.querySelector('.finish');
let instruct = document.querySelector('.instruction');
let endGame = document.querySelector('.endgame');

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; 
}


   
function winnerLogic(playerSelection, computerSelection) {
  if ((playerSelection == 'rock' && computerSelection == 'paper') || 
  (playerSelection == 'paper' && computerSelection == 'scissors') ||
  (playerSelection == 'scissors' && computerSelection == 'rock')) {
    return "computer" ;
  }

   else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
  (playerSelection == 'paper' && computerSelection == 'rock') ||
  (playerSelection == 'scissors' && computerSelection == 'paper')) {
    return "player";
  } 

}

function playRound(playerSelection, computerSelection) {
  if (winnerLogic(playerSelection, computerSelection) == "computer") {
    const message = `You Lose Round! ${computerSelection} beats ${playerSelection}`;
    return message;
  }

  else if (winnerLogic(playerSelection, computerSelection) == "player") {
    const message = `You Win Round! ${playerSelection} beats ${computerSelection}`;
    return message;
  }

  else if (playerSelection == computerSelection) {
    return "It's a Tie! try again" ;  
  }

  else { return "enter the correct choice!" ;
  }
}

function game() {
  
    computerSelection = getComputerChoice();
  //  console.log(playRound(playerSelection, computerSelection));


    if (winnerLogic(playerSelection, computerSelection) == "player") {
      playerScore++;
    }
   else if (winnerLogic(playerSelection, computerSelection) == "computer") {
    computerScore++;
   }

  // console.log(`${playerScore} and ${computerScore}`);

   

   computer.innerHTML = `Computer score:  ${computerScore}`;
   players.innerHTML = `Your score: ${playerScore}`;
   instruct.innerHTML = playRound(playerSelection, computerSelection);
   
  
}

function summary() {
 
  if (playerScore == 5) {
    finish.innerHTML = "You are the Winner!";
    playerScore = 0;
    computerScore = 0;
    instruct.innerHTML = "";
    
    endGame.innerHTML = 'GameOver'
   }

  else if (computerScore == 5) {
     finish.innerHTML = "You lose to CPU";
     playerScore = 0;
     computerScore = 0;
     instruct.innerHTML = "";
     endGame.innerHTML = 'GameOver'
   }
   
  else if(computerScore || playerScore < 5 ){

    endGame.innerHTML = "";
    finish.innerHTML = "";

  }


  }


 player.forEach(button => {
  
 button.addEventListener('click', () =>  {
  let choice = button.id;
  if (choice == "rock") {
    playerSelection = "rock";
  }

     
   else if (choice == "paper") {
    playerSelection = "paper";
      }

      else if (choice == "scissors") {
         playerSelection = "scissors";
      }
      game();
      summary();
 });
})


 

 
    


 
