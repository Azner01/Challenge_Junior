import { useState, useEffect } from "react";

export default function ButtonXO({
  mark,
  move,
  reset,
  set_reset,
  set_board,
  win,
}) {
  const [gridValue, setGridValue] = useState("");
  const [playerMark, setPlayerMark] = useState(false);

  useEffect(() => {
    if (reset) {
      setGridValue("");
      set_reset(false);
      setPlayerMark(false);
    }
  }, [reset]);

  //Visualizacion a tener el mouse encima
  const displayEnter = () => {
    if (win) {
      return;
    } else {
      if (playerMark === false) {
        setGridValue(mark);
      }
    }
  };

  //Cuando se quita el mouse
  const displayLeave = () => {
    if (win) {
      return;
    } else {
      if (playerMark === false) {
        setGridValue("");
      }
    }
  };

  //Para marcar la jugada en la casilla
  const movePlayer = () => {
    if (win) {
      return;
    } else {
      if (playerMark === false) {
        setGridValue(mark);
        set_board();
        setPlayerMark(true);
        move();
      }
    }
  };

  return (
    <button
      className="w-24 h-24 p-4 border-4 border-black"
      onMouseEnter={displayEnter}
      onMouseLeave={displayLeave}
      onClick={movePlayer}
    >
      <h2 className="text-4xl font-bold text-center">{gridValue}</h2>
    </button>
  );
}
