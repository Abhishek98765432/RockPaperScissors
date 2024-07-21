
const PlayAgain = document.getElementById("hurray-play-btn")
let rulesbtn= document.getElementById("rules-btn");
const rulesBox = document.getElementById('rules-box');
rulesbtn.addEventListener('click', () => {
    // Toggle the visibility of the container
    rulesBox.style.display = rulesBox.style.display === 'none' ? 'block' : 'none';
  });
  PlayAgain.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to the congratulatory page
  });