const domElements = {

    // Score Board Elements
    playerScore: document.getElementsByClassName("scoreboard__score-number player")[0],
    computerScore: document.getElementsByClassName("scoreboard__score-number ai")[0],
    scoreboardRounds: document.querySelector(".scoreboard__rounds"),
    platformResults: document.querySelector(".platform__results"),

    // Control Elements
    playerChoiceItem: document.querySelectorAll(".controls__player-choice-item a"),

    // Image elements
    playerChoiceImg: document.querySelector(".platform__player-selection"),
    computerChoiceImg: document.querySelector(".platform__ai-selection")
}

export default domElements;