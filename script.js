function computerPlay() {
    let RPS = pickRandom(["Rock", "Paper", "Scissors"]);
   return RPS
}
function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection){
       return "TIE"
   }
   if (computerSelection == "Paper"){
       return "I WIN"
   }
   if (computerSelection == "Scissors"){
       return "I LOSE"
   }
}
const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))