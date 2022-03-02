import domElements from "./elements.js";
import game from "./game.js";
import constants from "./constants.js";

export const loadGame = (evt) => {
    domElements.playerScore.innerText = game.curPlayerScore;
    domElements.computerScore.innerText = game.curComputerScore;
    domElements.scoreboardRounds.innerText = `${game.roundCount} / ${constants.END_ROUND}`;
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
            setResultText(`Round is tied!\n\n ${game.curComputerChoice} and ${game.curPlayerChoice}`);
            break;
    }
    if (game.roundCount == constants.END_ROUND) {
        resetGame();
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

const resetGame = () => {
    location.reload();
}

// ########### SETTERS ####################

const setResultText = (input) => {
    if (isLastRound()) { return; }
    game.resultText = input;
};

const increaseScore = (curTurn) => {
    if (isLastRound()) { return; }
    if (curTurn == constants.PLAYER) {
        game.curPlayerScore++;
    } else if (curTurn == constants.COMPUTER) {
        game.curComputerScore++;
    }
}

const setRoundCount = () => {
    if (isLastRound()) {
        return;
    } else {
        game.roundCount++;
    }
};

// ########### HELPER FUNCTIONS ####################

const getRandInt = () => {
    return Math.floor(Math.random() * 3 + 1);
};

const isLastRound = () => {
    if (game.roundCount > constants.END_ROUND) {
        return true;
    }
    return false;
};
