function resetGame(){
    if (document.getElementById("computer-score").innerHTML == 5){
        document.getElementById("results").innerHTML = "The computer wins!"
    }
        else {
            document.getElementById("results").innerHTML = "You win!"
    }
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    let button = document.createElement("button");
    button.innerHTML = "Reset Game";
    button.id = "reset"
    button.class = "reset"
    button.onclick = function(){gameInit()}
    let results = document.getElementById("results-window");
    results.appendChild(button)
}

function computerPlay() {
    let rps = ["Rock", "Paper", "Scissors"];
   return rps[Math.floor(Math.random() * rps.length)];
}

function gameInit() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    let resetButton = document.getElementById("reset");
    resetButton.remove()
    document.getElementById("player-score").innerHTML = 0
    document.getElementById("computer-score").innerHTML = 0
    document.getElementById("results").innerHTML = ""
    document.getElementById("computer-results").innerHTML = ""
}


function playRound(playerSelection) {
    let computerSelection = computerPlay();
    document.getElementById("computer-results").innerHTML = `The computer chose ${computerSelection}.`;
   if (playerSelection == computerSelection){
    document.getElementById("results").innerHTML = "You tied this round."
   }
   if (computerSelection == "Paper" && playerSelection == "Scissors" || 
       computerSelection == "Scissors" && playerSelection == "Rock"  ||
       computerSelection == "Rock" && playerSelection == "Paper"){
    document.getElementById("results").innerHTML = "You win this round."
    increaseScore("player-score")
   }
   if (playerSelection == "Paper" && computerSelection == "Scissors" || 
       playerSelection == "Scissors" && computerSelection == "Rock"  ||
       playerSelection == "Rock" && computerSelection == "Paper"){
    document.getElementById("results").innerHTML = "You lose this round."
    increaseScore("computer-score")
   }
}

function increaseScore(score) { //score is player-score or computer-score
    var valResult = document.getElementById(score).innerHTML;
    parseInt(valResult, 10);
    valResult ++
    document.getElementById(score).innerHTML = valResult;
    if (document.getElementById(score).innerHTML == 5) { //Win condition
       resetGame();
    }
}