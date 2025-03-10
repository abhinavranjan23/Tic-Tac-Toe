import { useEffect, useState } from "react";
import winPattern from "./winPattern";

const useGameFunc = () => {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isXTurn, setXturn] = useState(false);
  const [winner, setWinner] = useState(null);
  const [countDown, setCountDown] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winningCombo, setWinningCombo] = useState([]);
  const handleBox = (ind) => {
    const newBox = [...box];
    if (!newBox[ind] && !winner) {
      isXTurn ? (newBox[ind] = "X") : (newBox[ind] = "O");
      setXturn(!isXTurn);
      setBox(newBox);
      if (!showReset) {
        setShowReset(true);
      }
      const isDraw = newBox.every((e) => e !== null);
      if (isDraw) {
        setDraw(true);
      }
    }
  };

  useEffect(() => {
    for (let pattern of winPattern) {
      const [a, b, c] = pattern;
      if (box[a] && box[a] === box[b] && box[b] === box[c]) {
        setWinner(box[a]);
        setWinningCombo([a, b, c]);
        return;
      }
    }
    //console.log("i am useffect called on click");
  }, [box]);
  useEffect(() => {
    if (winner) {
      let countTime = 5;
      setCountDown(countTime);
      const timeOut = setInterval(() => {
        countTime -= 1;
        setCountDown(countTime);
        if (countTime == 0) {
          setAnimate(true);
          clearInterval(timeOut);
          setTimeout(() => {
            resetGame();
          }, 2000);
        }
      }, 1000);
    }
  }, [winner]);
  const resetGame = () => {
    setXturn(false);
    setBox(Array(9).fill(null));
    setWinner(null);
    setCountDown(null);
    setAnimate(false);
    setShowReset(false);
    setWinningCombo([]);
    setDraw(false);
  };
  return {
    box,
    handleBox,
    resetGame,
    countDown,
    winner,
    animate,
    showReset,
    draw,
    winningCombo,
    isXTurn,
  };
};
export default useGameFunc;
