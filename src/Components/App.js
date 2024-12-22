import Board from "./Board";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-cream h-screen'>
      <h1 className='text-red-500 font-extrabold text-3xl  text-tgray'>
        Tic Tac toe
      </h1>
      <Board />
    </div>
  );
};
export default App;
