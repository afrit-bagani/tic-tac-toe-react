import { useState } from "react";
import PlayGround from "./components/PlayGround";
import Result from "./components/Result";

function App() {
  let [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  let [currentPLayer, setCurrentPlayer] = useState("X");
  let [message, setMessage] = useState("");

  function changeCurrentPlayer() {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  function checkWinner(board) {
    let winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombo.find(
      (combo) =>
        board[combo[0]] !== null &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
    );
  }

  const handleCellClick = (index) => {
    if (message || gameBoard[index] !== null) return;

    let copyGameBoard = [...gameBoard];
    copyGameBoard[index] = currentPLayer;
    setGameBoard(copyGameBoard);

    const winnerCombo = checkWinner(copyGameBoard);
    if (winnerCombo) {
      setMessage(`Player ${currentPLayer} Wins !!!`);
    } else if (copyGameBoard.every((cell) => cell !== null)) {
      setMessage("It's a Tie");
    } else {
      changeCurrentPlayer();
    }
  };

  function resetGame() {
    setGameBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setMessage("");
  }

  return (
    <>
      <div className="container">
        <h3 className="heading">Tic Tac Toe</h3>
        <PlayGround gameBoard={gameBoard} handleCellClick={handleCellClick} />
        <Result message={message} />
        {message && (
          <button className="btn btn-danger af-restart-btn" onClick={resetGame}>
            Restart Game
          </button>
        )}
      </div>
    </>
  );
}

export default App;
