



// /*
//     Run this function to start a game of Rock, Paper, Scissors
// */

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     console.log("Game is starting, 5 rounds of play");
//     for (let i = 0; i < 5; i++) {
//         let roundResult = playRound(playerPlay(), computerPlay());
//         if (roundResult == 1) {
//             playerScore++;
//         } else if (roundResult == -1) {
//             computerScore++;
//         }
//         console.log(`Player: ${playerScore} and Computer: ${computerScore}`)
//     }
//     declareWinner(playerScore, computerScore);
// }


// /*
//     Player and computer selections are compared and winner of round is decided.
// */
// function playRound(playerSelection, computerSelection) {
//     switch (playerSelection.concat(computerSelection)) {
//         case "RockScissors":
//         case "PaperRock":
//         case "ScissorsPaper":
//             updateResults(`You win! ${playerSelection} beats ${computerSelection}`);
//             return 1;
//         case "ScissorsRock":
//         case "RockPaper":
//         case "PaperScissors":
//             updateResults(`You Lost :( ${computerSelection} beats ${playerSelection}`);
//             return -1;
//         case "ScissorsScissors":
//         case "RockRock":  
//         case "PaperPaper":
//             updateResults(`Tie! ${computerSelection} and ${playerSelection}`);
//             return 0;
//         default:
//             updateResults("Thats a win for the computer!");
//             return -1; //Quitting in the middle of the round is a win for computer.
//     }
// }

// /*
//     Prompts the user for a choice.
// */
// function playerPlay(playerChoice) { 
//     console.log(toTitleCase(playerChoice));
//     return toTitleCase(playerChoice);
// }

// /* 
//     Make the computer return a random choice.
// */
// function computerPlay() {
//     switch (getRandInt()) {
//         case 1:
//             return "Rock";
//         case 2:
//             return "Paper";
//         default:
//             return "Scissors";
//     }
// }

// /*
//     Prints the game result to console.
// */
// function declareWinner(playerScore, computerScore) {
//     console.log(`Player score is ${playerScore} and computer score is ${computerScore}`);
//     if (playerScore > computerScore) {
//         console.log("Player wins!")
//     } else if (computerScore > playerScore) {
//         console.log("Computer wins!")
//     } else {
//         console.log("Its a tie!")
//     }
// }

// // ########### HELPER FUNCTIONS ####################

// /*
//     Return a random number between 1 and 3(inclusive).
// */
// function getRandInt() {
//     return Math.floor(Math.random() * 3 + 1);
// }

// /*
//     Checks if the user input is one of the available choices.
// */
// function checkValidChoice(choice) {
//     let upperChoice = choice.toUpperCase();
//     if (upperChoice == "ROCK" || upperChoice == "PAPER" || upperChoice == "SCISSORS") {
//         return true;
//     }
//     return false;
// }

// /*
//     Converts string to title case.
// */
// function toTitleCase(string) {
//     let firstPart = string
//         .slice(0,1)
//         .toUpperCase();
//     let secondPart = string
//         .slice(1)
//         .toLowerCase();
//     return firstPart.concat(secondPart);
// }

// /*
//     Checks for null value
// */
// function checkNull(input) {
//     return input === null;
// }

// function updateResults(input) {
//     platformResults.innerText = input;
// }