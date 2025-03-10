import Board from "./Board";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-cream h-screen'>
      <h1 className=' font-extrabold text-5xl  text-tgray font-mono'>
        Tic Tac Toe
      </h1>
      <Board />
    </div>
  );
};
export default App;
