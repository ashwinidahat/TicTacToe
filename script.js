<<<<<<< HEAD
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("resetBtn");

const resultScreen = document.querySelector(".result-screen");
const resultText = document.querySelector(".result-text");
const newGameBtn = document.getElementById("newGameBtn");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", resetBoard);
newGameBtn.addEventListener("click", startNewGame);

function handleClick() {
  const index = this.getAttribute("data-index");

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  this.textContent = currentPlayer;

  checkWinner();
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;

    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      showResultScreen(`${currentPlayer} Wins! 🏆`);
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    showResultScreen("It's a Draw! 😐");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function showResultScreen(message) {
  resultText.textContent = message;
  resultScreen.classList.remove("hidden");
}

function startNewGame() {
  resultScreen.classList.add("hidden");
  resetBoard();
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  cells.forEach(cell => (cell.textContent = ""));
}
=======
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("resetBtn");

const resultScreen = document.querySelector(".result-screen");
const resultText = document.querySelector(".result-text");
const newGameBtn = document.getElementById("newGameBtn");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", resetBoard);
newGameBtn.addEventListener("click", startNewGame);

function handleClick() {
  const index = this.getAttribute("data-index");

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  this.textContent = currentPlayer;

  checkWinner();
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;

    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      showResultScreen(`${currentPlayer} Wins! 🏆`);
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    showResultScreen("It's a Draw! 😐");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function showResultScreen(message) {
  resultText.textContent = message;
  resultScreen.classList.remove("hidden");
}

function startNewGame() {
  resultScreen.classList.add("hidden");
  resetBoard();
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  cells.forEach(cell => (cell.textContent = ""));
}
>>>>>>> 4acc146fb98b5b513b5181fb93ec938a641de5bc
