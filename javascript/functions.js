import domElements from "./elements.js";
import game from "./game.js";
import constants from "./constants.js";

export const loadGame = (evt) => {
    domElements.playerScore.innerText = game.curPlayerScore;
    domElements.computerScore.innerText = game.curComputerScore;
    domElements.scoreboardRounds.innerText = `${game.roundCount} \n--\n ${constants.END_ROUND}`;
    domElements.platformResults.innerText = game.resultText;
};

export const choiceClicked = (evt) => {
    game.curPlayerChoice = evt.target.dataset.sign;
    computerPlay();
    calcRoundWinner();
    switch (game.roundWinner) {
        case constants.PLAYER:
            increaseScore(constants.PLAYER);
            setResultText(`You win this round!\n\n ${game.curPlayerChoice} beats ${game.curComputerChoice}`);
            break;
        case constants.COMPUTER:
            increaseScore(constants.COMPUTER);
            setResultText(`You Lost this round :(\n\n ${game.curComputerChoice} beats ${game.curPlayerChoice}`);
            break;
        case constants.TIE:
            increaseScore(constants.PLAYER);
            increaseScore(constants.COMPUTER);
            setResultText(`Round is tied!\n\n ${game.curComputerChoice} and ${game.curPlayerChoice}`);
            break;
    }
    if (game.roundCount + 1 == constants.END_ROUND) {
        showResetBtn();
        calcGameWinner();
        const gameResult = document.createElement("div");
        switch (game.gameWinner) {
            case constants.PLAYER:
                gameResult.innerText = "You won the game!";
                break;
            case constants.COMPUTER:
                gameResult.innerText = "You lost the game...";
                break;
            case constants.TIE:
                gameResult.innerText = "The game is a tie";
                break;
        }
        gameResult.classList.add("game__result");
        domElements.platformResults.classList.add("platform__results--final");
        domElements.gamePlatform.prepend(gameResult);
    }
    setRoundCount();
};

const computerPlay = () => {
    switch (getRandInt()) {
        case 1:
            game.curComputerChoice = "Rock";
            break;
        case 2:
            game.curComputerChoice = "Paper";
            break;
        default:
            game.curComputerChoice = "Scissors";
            break;
    }
};

const calcRoundWinner = () => {
    switch (game.curPlayerChoice.concat(game.curComputerChoice)) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            game.roundWinner = constants.PLAYER;
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            game.roundWinner = constants.COMPUTER;
            break;
        case "ScissorsScissors":
        case "RockRock":  
        case "PaperPaper":
            game.roundWinner = constants.TIE;
            break;
    }
};

const calcGameWinner = () => {
    if (game.curPlayerScore > game.curComputerScore) {
        game.gameWinner = constants.PLAYER;
    } else if (game.curPlayerScore == game.curComputerScore) {
        game.gameWinner = constants.TIE;
    } else {
        game.gameWinner = constants.COMPUTER;
    }
};

const resetGame = () => {
    location.reload();
};

const showResetBtn = () => {
    for (let item of domElements.playerChoiceItem) {
        item.remove();
    }
    const resetBtn = document.createElement("a");
    resetBtn.innerText = "RESET";
    resetBtn.classList.add("reset-btn");
    domElements.controlsPlayerChoice.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
};

// ########### SETTERS ####################

const setResultText = (input) => {
    game.resultText = input;
};

const increaseScore = (curTurn) => {
    if (curTurn == constants.PLAYER) {
        game.curPlayerScore++;
    } else if (curTurn == constants.COMPUTER) {
        game.curComputerScore++;
    }
};

const setRoundCount = () => {
    game.roundCount++;
};

// ########### HELPER FUNCTIONS ####################

const getRandInt = () => {
    return Math.floor(Math.random() * 3 + 1);
};
