import ButtonXO from "@components/challenge6/ButtonXO";

import { useEffect, useState } from "react";

export default function TicTacToe() {
  let initialBoard = [
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ];
  // console.log(typeof initialBoard);
  const [win, setWin] = useState(false);
  const [player, setPlayer] = useState("X");
  const [reset, setReset] = useState(false);
  const [board, setBoard] = useState(initialBoard);
  const [winningPlayer, setWinningPlayer] = useState("X");

  //Condiciones para ganar
  useEffect(() => {
    winBoard;
  });
  const winBoard = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      let squareA = board.find((square) => square.id === a);
      let squareB = board.find((square) => square.id === b);
      let squareC = board.find((square) => square.id === c);

      if (
        squareA?.value &&
        squareA.value === squareB.value &&
        squareA.value === squareC.value &&
        squareB.value === squareC.value
      ) {
        setWin(true);
        return;
      }
    }
  };

  useEffect(() => {
    winBoard(board);
  });

  //Actualizar la casilla
  const boardMark = (id) => {
    if (win) {
      return;
    }
    const newBoard = board.map((square) => {
      if (square.id === id && square.value === "") {
        return { id: id, value: player };
      }
      return square;
    });
    setBoard(newBoard);
    // if (win) {
    //   setBoard(player === "X" ? "O" : "X");
    // }
  };

  //Cambiar de jugador
  const movePlayer = () => {
    setReset(false);
    if (win === false) {
      if (player === "X") {
        setPlayer("O");
        setWinningPlayer(player);
      } else {
        setPlayer("X");
        setWinningPlayer(player);
      }
    }
  };

  //Resetear el juego
  const Reset = () => {
    setReset(true);
    setPlayer("X");
    setWin(false);
    setWinningPlayer(false);

    const resetBoard = board.map((square) => {
      for (var id = 1; id <= square.id + 1; id++) {
        if ((square.value = !"")) {
          square.value = "";
        }
      }
      return square;
    });
    setBoard(resetBoard);
  };

  // console.log(win);

  return (
    <section className="grid p-4 space-y-4 bg-white border-4 border-black place-content-center">
      <h1 className="text-4xl font-extrabold text-center">Tic Tac Toe</h1>
      <div className="grid grid-cols-3">
        {board.map((square) => (
          <ButtonXO
            client:load
            mark={player}
            move={movePlayer}
            reset={reset}
            set_reset={setReset}
            key={square.id}
            board={square.value}
            set_board={() => boardMark(square.id)}
            win={win}
          />
        ))}
      </div>

      <button
        className="w-1/2 p-2 px-4 bg-green-400 border-2 hover:bg-green-600 place-self-center"
        onClick={Reset}
      >
        Reset
      </button>
      {win ? (
        <h3 className="text-3xl text-center">
          El ganador es "{winningPlayer}"
        </h3>
      ) : (
        <h3 className="text-3xl text-center">Turno de "{player}"</h3>
      )}
    </section>
  );
}
