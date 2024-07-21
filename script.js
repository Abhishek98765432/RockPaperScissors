
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const optionDisplay = document.getElementById("choose-option");
const TieDisplay = document.getElementById("tie");
const winDisplay = document.getElementById("win");
const lostDisplay = document.getElementById("lost");
const playAgainButtons = document.querySelectorAll(".play-again");
const Replay = document.getElementById("replay");
let rulesbtn= document.getElementById("rules-btn");
const rulesBox = document.getElementById('rules-box');
const nextButton = document.getElementById("nextButton");
const computerScore = document.getElementById("put-pc-score");
const yourScore = document.getElementById("put-ur-score");

rulesbtn.addEventListener('click', () => {
  // Toggle the visibility of the container
  rulesBox.style.display = rulesBox.style.display === 'none' ? 'block' : 'none';
  document.querySelector("#close-btn").addEventListener("click",()=>{
    rulesBox.style.display="none";
  })
});
nextButton.style.display="none";
let choices = ["rock", "paper", "scissors"];
let computerScoreCount = localStorage.getItem("computerScore") || 0;
let yourScoreCount = localStorage.getItem("yourScore") || 0;

computerScore.textContent = computerScoreCount;
yourScore.textContent = yourScoreCount;

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(yourChoice) {
  optionDisplay.style.display = "none";
  // cloaseAfterRes.style.display="flex";
  const computerChoice = getComputerChoice();
  let res = document.querySelector("#results-hidden");
  res.style.display = "block";
  document.querySelector("#u-picked").style.display = "block";
  document.querySelector("#pc-picked").style.display = "block";
  // Reset previous choices
  document.querySelector("#ur-choice-rock").style.display="none";
  document.querySelector("#ur-choice-paper").style.display="none";
  document.querySelector("#ur-choice-scissors").style.display="none";
  document.querySelector("#pc-choice-rock").style.display="none";
  document.querySelector("#pc-choice-paper").style.display="none";
  document.querySelector("#pc-choice-scissors").style.display="none";
  if (yourChoice === computerChoice) {
    TieDisplay.style.display = "block";
  } else if (
    (yourChoice === "rock" && computerChoice === "scissors") ||
    (yourChoice === "paper" && computerChoice === "rock") ||
    (yourChoice === "scissors" && computerChoice === "paper")
  ) {
    winDisplay.style.display = "block";
    yourScoreCount++;
    localStorage.setItem("yourScore", yourScoreCount);
    yourScore.textContent = yourScoreCount;
  } else {
    lostDisplay.style.display = "block";
    computerScoreCount++;
    localStorage.setItem("computerScore", computerScoreCount);
    computerScore.textContent = computerScoreCount;
  }

  document.querySelector(`#ur-choice-${yourChoice}`).style.display = "flex";
  document.querySelector(`#pc-choice-${computerChoice}`).style.display = "flex";

  if (yourScoreCount > computerScoreCount) {
    nextButton.style.display = "flex";
    rulesbtn.style.left="77.03125vw";
  } else if(yourScoreCount < computerScoreCount){
    nextButton.style.display = "none";
    rulesbtn.style.left="88.75vw";
  }
}

playAgainButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Reset the result section
    // document.querySelector("#ur-choice-paper").style.display="none";
    // document.querySelector("#ur-choice-scissors").style.display="none";
    optionDisplay.style.display = "block";
    document.querySelector("#results-hidden").style.display = "none";
    TieDisplay.style.display = "none";
    winDisplay.style.display = "none";
    lostDisplay.style.display = "none";
    // rockButton.style.display =  "none";
    // paperButton.style.display =  "none";
    // scissorsButton.style.display =  "none";
    // nextButton.style.display = "none"; // Hide the Next button
  });
});

Replay.addEventListener("click", () => {
  // Reset the result section
  TieDisplay.style.display = "none";
  // document.querySelector("#ur-choice-rock").style.display="none";
  // document.querySelector("#ur-choice-paper").style.display="none";
  // document.querySelector("#ur-choice-scissors").style.display="none";
  document.querySelector("#results-hidden").style.display = "none";
  optionDisplay.style.display = "block";
  winDisplay.style.display = "none";
  lostDisplay.style.display = "none";
  // nextButton.style.display = "none"; // Hide the Next button
  // rockButton.style.display =  "none";
  // paperButton.style.display =  "none";
  // scissorsButton.style.display =  "none";
});

nextButton.addEventListener("click", () => {
  window.location.href = "congratulatory.html"; // Redirect to the congratulatory page
});
// #D9D9D900