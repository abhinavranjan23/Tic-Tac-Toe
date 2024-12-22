import Block from "./block";
import useGameFunc from "../utils/useGameFunc";
const Board = () => {
  const { winner, countDown, animate, handleBox, resetGame, box, showReset } =
    useGameFunc();
  return (
    <div className='flex flex-col items-center'>
      <div className='h-10 my-4'>
        {winner && (
          <span className='text-xs md:text-lg font-semibold text-center'>
            {`Congratulations! Player ${winner} wins. Game will reset in ${countDown}`}
          </span>
        )}
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
          />
        ))}
      </div>
      <div className='flex mt-3 w-72 sm:w-96 h-14'>
        {showReset && (
          <button
            className='grow bg-hgree h-12 rounded-sm font-bold hover:ring-1 hover:scale-102'
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
