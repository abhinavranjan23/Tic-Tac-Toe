import { useEffect, useState } from "react";
import winPattern from "./winPattern";

const useGameFunc = () => {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isXTurn, setXturn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [countDown, setCountDown] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleBox = (ind) => {
    const newBox = [...box];
    if (!newBox[ind] && !winner) {
      isXTurn ? (newBox[ind] = "x") : (newBox[ind] = "o");
      setXturn(!isXTurn);
      setBox(newBox);
    }
    if (!showReset) {
      setShowReset(true);
    }
  };

  useEffect(() => {
    for (let a of winPattern) {
      if (box[a[0]] === box[a[1]] && box[a[1]] === box[a[2]]) {
        setWinner(box[a[0]]);
        break;
      }
    }
    //console.log("i am useffect called on click");
  }, [box]);
  useEffect(() => {
    if (winner) {
      let countTime = 2;
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
    setXturn(true);
    setBox(Array(9).fill(null));
    setWinner(null);
    setCountDown(null);
    setAnimate(false);
    setShowReset(false);
  };
  return { box, handleBox, resetGame, countDown, winner, animate, showReset };
};
export default useGameFunc;
