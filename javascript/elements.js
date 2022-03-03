const domElements = {
    // Score Board Elements
    playerScore: document.getElementsByClassName("scoreboard__score-number player")[0],
    computerScore: document.getElementsByClassName("scoreboard__score-number ai")[0],
    scoreboardRounds: document.querySelector(".scoreboard__rounds"),
    platformResults: document.querySelector(".platform__results"),
    // Control Elements
    playerChoiceItem: document.querySelectorAll(".controls__player-choice-item a"),
    controlsPlayerChoice: document.querySelector(".controls__player-choice"),
    gamePlatform: document.querySelector(".game__platform")
}

export default domElements;