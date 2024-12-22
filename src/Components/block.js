const Block = ({ value, index, setBox, animate }) => {
  const handleClick = () => {
    setBox(index);
  };
  return (
    <button
      className={`border-2 border-black ${
        value === "x" ? "text-tgray" : " text-black "
      } text-7xl font-bold bg-ngreen hover:bg-hgree ${
        animate ? "animate-hflip text-transparent " : ""
      }`}
      onClick={handleClick}
    >
      <span className={`${animate ? "animate-texthid" : ""}`}>{value}</span>
    </button>
  );
};
export default Block;
