import Block from "./block";
import useGameFunc from "../utils/useGameFunc";
const Board = () => {
  const {
    winner,
    countDown,
    animate,
    handleBox,
    resetGame,
    box,
    showReset,
    draw,
    winningCombo,
    isXTurn,
  } = useGameFunc();
  return (
    <div className='flex flex-col items-center'>
      <div className='h-10 my-4'>
        {winner && (
          <span className='text-xs md:text-lg font-semibold text-center'>
            {`Congratulations! Player ${winner} wins. Game will reset in ${countDown}`}
          </span>
        )}{" "}
        {!winner && draw && (
          <span className='text-xs md:text-lg font-semibold text-center'>
            {`Its a Draw..... Click Reset and Play again`}
          </span>
        )}
      </div>
      <div className='flex justify-between w-72 sm:w-96'>
        <button
          className={`${
            isXTurn ? "bg-hgree " : "bg-blue ring-2 ring-ngreen  scale-105"
          } text-black font-sans  rounded-tr-xl rounded-bl-xl p-1 md:p-2`}
        >
          Your Turn
        </button>
        <button
          className={`${
            isXTurn ? "bg-red ring-2 ring-bggreen  scale-105" : " bg-hgree "
          } text-black font-sans  rounded-tl-xl rounded-br-xl p-1 md:p-2`}
        >
          Opponent turn
        </button>
      </div>

      <div
        className={`grid grid-cols-3 grid-rows-3 w-72 h-72 sm:w-96 sm:h-96  mt-6 md:mt-6 gap-1 `}
      >
        {box.map((value, index) => (
          <Block
            key={index}
            value={value}
            index={index}
            setBox={(ind) => handleBox(ind)}
            animate={animate}
            winningCombo={winningCombo}
            winner={winner}
          />
        ))}
      </div>
      <div className='flex mt-3 w-72 sm:w-96 h-14'>
        {showReset && (
          <button
            className='grow bg-hgree h-12 rounded-sm font-bold hover:ring-1 hover:scale-102 active:scale-95'
            onClick={resetGame}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
export default Board;
