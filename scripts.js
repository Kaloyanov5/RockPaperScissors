const winsDiv = document.getElementById("wins");
const drawsDiv = document.getElementById("draws");
const losesDiv = document.getElementById("loses");
let [wins, draws, loses] = [0, 0, 0];
const options = ["rock", "paper", "scissors"];
const urls = {
    "rock": "./images/rock.png",
    "paper": "./images/paper.png",
    "scissors": "./images/scissors.png"
};

const bgColor = document.getElementById("game");
const aiDiv = document.getElementById("ai-choice");
const textDiv = document.getElementById("game-text");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const resetDiv = document.getElementById("reset-game");

const reset = () => {
    bgColor.style.backgroundColor = "var(--main-color)";
    rockDiv.style.display = "block";
    scissorsDiv.style.display = "block";
    paperDiv.style.background = "url(./images/paper.png)";
    aiDiv.style.background = "url(./images/robot.png)";
    aiDiv.style.backgroundSize = "cover";
    paperDiv.style.backgroundSize = "cover";
    textDiv.textContent = "Rock, Paper, Scissors?";
}

const updateStats = () => {
    winsDiv.innerText = `${wins}`;
    drawsDiv.innerText = `${draws}`;
    losesDiv.innerText = `${loses}`;
}
updateStats();

const drawGame = () => {
    bgColor.style.backgroundColor = "var(--main-color)";
    textDiv.textContent = "Draw!";
    draws++;
}

const winGame = () => {
    bgColor.style.backgroundColor = "var(--win-color)";
    textDiv.textContent = "You Win!";
    wins++;
}

const loseGame = () => {
    bgColor.style.backgroundColor = "var(--lose-color)";
    textDiv.textContent = "You Lose!";
    loses++;
}

const aiChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
}

const playGame = (playerChoice, aiChoice) => {
    aiDiv.style.background = `url(${urls[aiChoice]})`;
    aiDiv.style.backgroundSize = "cover";
    paperDiv.style.background = `url(${urls[playerChoice]})`;
    paperDiv.style.backgroundSize = "cover";
    rockDiv.style.display = "none";
    scissorsDiv.style.display = "none";

    if (playerChoice === aiChoice){
        drawGame();
    } else if ((playerChoice === "rock" && aiChoice === "scissors") || 
    (playerChoice === "paper" && aiChoice === "rock") ||
    (playerChoice === "scissors" && aiChoice === "paper")){
        winGame();
    } else{
        loseGame();
    }

    resetDiv.style.display = "block";
    updateStats();
}

resetDiv.addEventListener("click", () => {
    reset();
    resetDiv.style.display = "none";
})

rockDiv.addEventListener("click", () => {
    playGame("rock", aiChoice());
});
paperDiv.addEventListener("click", () => {
    playGame("paper", aiChoice());
});
scissorsDiv.addEventListener("click", () => {
    playGame("scissors", aiChoice());
});