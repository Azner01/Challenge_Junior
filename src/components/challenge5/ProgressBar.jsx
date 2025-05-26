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
          if (num < 100) {
            return num + 1;
          } else {
            setStopTimer(false);
            return num;
          }
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
    if (stateText == "Parar") {
      setStateText("Seguir");
      setStopTimer(false);
    } else {
      setStateText("Parar");
      setStopTimer(true);
    }
  };

  const ProgressBar = () => {
    if (stopTimer == false) {
      setStopTimer(true);
      if (stateText == "Seguir") {
        Reset();
        setStateText("Parar");
        setStopTimer(true);
      }
    } else {
      Reset();
      setStateText("Parar");
      setStopTimer(true);
    }
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
