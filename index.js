const squares = document.querySelectorAll(".grid div");
const restart = document.querySelector(".restart");
const results = document.getElementById("results");
const displayCurrentPlayer = document.getElementById("current-player");
let currentPlayer = 1;
let gameover = false;

const winningCombos = [];

function checkBoard() {
  let cPlayer = currentPlayer == 1 ? 2 : 1;
  for (let i = squares.length - 7; i >= 0; i--) {
    if (
      (squares[i].classList.contains(`player${cPlayer}`) &&
        squares[i - 7].classList.contains(`player${cPlayer}`) &&
        squares[i - 14].classList.contains(`player${cPlayer}`) &&
        squares[i - 21].classList.contains(`player${cPlayer}`)) ||
      (squares[i].classList.contains(`player${cPlayer}`) &&
        squares[i - 1].classList.contains(`player${cPlayer}`) &&
        squares[i - 2].classList.contains(`player${cPlayer}`) &&
        squares[i - 3].classList.contains(`player${cPlayer}`))
    ) {
      gameover = true;
    } else if (
      squares[i].classList.contains(`player${cPlayer}`) &&
      squares[i - 6].classList.contains(`player${cPlayer}`) &&
      squares[i - 12].classList.contains(`player${cPlayer}`) &&
      squares[i - 18].classList.contains(`player${cPlayer}`)
    ) {
      gameover = true;
    } else if (
      squares[i].classList.contains(`player${cPlayer}`) &&
      squares[i - 8].classList.contains(`player${cPlayer}`) &&
      squares[i - 16].classList.contains(`player${cPlayer}`) &&
      squares[i - 24].classList.contains(`player${cPlayer}`)
    ) {
      gameover = true;
    }

    let winner = cPlayer == 1 ? "Player 1 (Red) won!" : "Player 2 (Blue) won!";
    results.style.color = cPlayer == 1 ? "red" : "blue";
    gameover ? (results.innerHTML = winner) : "";
  }
}

for (let i = 0; i < squares.length - 7; i++) {
  squares[i].onclick = () => {
    if (!gameover) {
      if (
        squares[i + 7].classList.contains("taken") &&
        !squares[i].classList.contains("taken")
      ) {
        console.log(i);
        if (currentPlayer == 1) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player1");
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = "Player " + currentPlayer + " (Blue)";
          displayCurrentPlayer.style.color = "Blue";
        } else if (currentPlayer == 2) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player2");
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = "Player " +  currentPlayer + "(Red)";
          displayCurrentPlayer.style.color = "Red";
        }
      } else {
        alert("You cant go there");
      }
      checkBoard();
    }
  };
}

restart.onclick = () => {
  currentPlayer = 1;
  gameover = false;
  displayCurrentPlayer.innerHTML = "Player " + 1 + " (Red)";
  displayCurrentPlayer.style.color = "Red";
  results.innerHTML = "";
  for (let i = 0; i < squares.length - 7; i++) {
    squares[i].classList.remove("taken");
    squares[i].classList.remove("player1");
    squares[i].classList.remove("player2");
  }
}
