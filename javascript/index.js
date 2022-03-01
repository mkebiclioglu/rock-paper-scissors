import constants from "./constants.js";
import domElements from "./elements.js";
import game from "./game.js";

window.addEventListener("load", (e) => {
    domElements.playerScore.innerText = game.curPlayerScore;
    domElements.computerScore.innerText = game.curComputerScore;
    domElements.scoreboardRounds.innerText = `${game.roundCount} / ${constants.END_ROUND}`;
});

[...domElements.playerChoiceItem].map(elem => elem.addEventListener("click", (e) => {
    console.log(e.target.dataset.sign);
}));
