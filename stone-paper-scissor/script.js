const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const buttons = document.querySelectorAll(".choice");

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");

const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const drawScoreText = document.getElementById("draw-score");

const resetBtn = document.getElementById("reset");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const userChoice = button.dataset.choice;

        playGame(userChoice);

    });

});
resetBtn.addEventListener("click", resetGame);

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    playerChoice.textContent = "-";
    computerChoice.textContent = "-";
    result.textContent = "Choose your move!";

    updateScore();

}

function updateScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    drawScoreText.textContent = drawScore;
}
async function playGame(userChoice) {

    playerChoice.textContent = userChoice;

    // Show thinking message
    computerChoice.textContent = "🤔 Thinking...";
    result.textContent = "Computer is thinking...";

    // Wait 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate computer choice
    const randomIndex = Math.floor(Math.random() * 3);
    const computer = choices[randomIndex];

    computerChoice.textContent = computer;

    // Decide winner
    if (userChoice === computer) {

        result.textContent = "🤝 It's a Draw!";
        drawScore++;

    } else if (

        (userChoice === "rock" && computer === "scissors") ||
        (userChoice === "paper" && computer === "rock") ||
        (userChoice === "scissors" && computer === "paper")

    ) {

        result.textContent = "🎉 You Win!";
        playerScore++;

    } else {

        result.textContent = "😢 Computer Wins!";
        computerScore++;

    }

    updateScore();
}