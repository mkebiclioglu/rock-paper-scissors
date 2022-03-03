import domElements from "./elements.js";
import { 
    choiceClicked,
    loadGame
} from "./functions.js";

window.addEventListener("load", loadGame);
[...domElements.playerChoiceItem].map(elem => elem.addEventListener("click", choiceClicked));
[...domElements.playerChoiceItem].map(elem => elem.addEventListener("click", loadGame));
