import { useState, useEffect } from "react";
import Bar from "@components/challenge5/Bar";
import ButtonP from "@components/challenge5/ButtonP";

export default function ProgressBar() {
  const [progressNum, setProgressNum] = useState(0);
  const [stateText, setStateText] = useState("Parar");
  const [stopTimer, setStopTimer] = useState(false);
  const [timer, setTimer] = useState(500);

  useEffect(() => {
    let countInterval;
    if (stopTimer) {
      countInterval = setInterval(() => {
        setProgressNum((num) => {
          return num < 100 ? num + 1 : num;
        });
      }, timer);
    }
    return () => clearInterval(countInterval);
  }, [progressNum, stopTimer, timer]);

  const Reset = () => {
    setProgressNum(0);
    setStateText("Parar");
    setStopTimer(false);
  };

  const SwitchStop = () => {
    setStateText(stateText == "Parar" ? "Seguir" : "Parar");
    setStopTimer(stateText == "Parar" ? false : true);
  };

  const ProgressBar = () => {
    setStopTimer(true);
    Reset();
    setStateText("Parar");
    setStopTimer(true);
  };

  const changeTimer = (event) => {
    setTimer(event.target.value);
  };

  return (
    <div className="grid p-5">
      <Bar progress={progressNum} />
      <div className="grid justify-center gap-4 m-4">
        <h2 className="dark:text-white">Velocidad por milisegundo</h2>
        <input
          className="text-center border-2 border-black dark:border-white"
          type="number"
          value={timer}
          onChange={changeTimer}
        />
      </div>
      <div className="flex justify-center gap-20 m-4">
        <ButtonP text="Reiniciar" functionB={Reset} />
        <ButtonP text={stateText} functionB={SwitchStop} />
        <ButtonP text="Iniciar" functionB={ProgressBar} />
      </div>
    </div>
  );
}
