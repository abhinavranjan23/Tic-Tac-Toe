const Block = ({ value, index, setBox, animate, winningCombo, winner }) => {
  const handleClick = () => {
    setBox(index);
  };
  const isWinningBox = winningCombo.includes(index);
  return (
    <button
      className={`border-2 border-black active:scale-95 ${
        value === "X" ? "text-tgray" : "text-black"
      } text-7xl font-bold ${
        isWinningBox ? (winner === "X" ? "bg-red" : "bg-blue") : "bg-ngreen"
      } ${animate ? "animate-hflip text-transparent" : ""}`}
      onClick={handleClick}
    >
      <span className={`${animate ? "animate-texthid" : ""}`}>{value}</span>
    </button>
  );
};
export default Block;
