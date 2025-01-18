const PlayGround = ({ gameBoard, handleCellClick }) => {
  return (
    <div className="play-ground">
      {gameBoard.map((cell, index) => (
        <button
          key={index}
          type="button"
          className="btn af-btn"
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default PlayGround;
