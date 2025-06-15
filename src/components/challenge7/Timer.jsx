import { useState, useEffect } from "react";
import InputTime from "@components/challenge7/InputTime";
import ButtonB from "@components/challenge7/ButtonB";

export default function Timer() {
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  let [totalTimeSeconds, setTotalTimeSeconds] = useState(0);

  useEffect(() => {
    let s = seconds;
    let m = minutes * 60;
    let h = hours * 3600;
    let intervalID;
    //iniciar el tiempo
    if (!timerStarted) {
      setTotalTimeSeconds(h + m + s);
    }
    console.log(totalTimeSeconds);
    if (timerStarted == true && totalTimeSeconds > 0) {
      intervalID = setInterval(() => {
        setTotalTimeSeconds((prevTime) => {
          const totalTime = prevTime - 1;

          //poner los números de la hora, minutos y segundos
          setHours(Math.floor(totalTime / 3600));
          setMinutes(Math.floor((totalTime % 3600) / 60));
          setSeconds(totalTime % 60);

          if (totalTime <= 0) {
            clearInterval(intervalID);
            setTimerStarted(false);
            return 0;
          }
          return totalTime;
        });
      }, 1000);
    } else if (timerStarted && totalTimeSeconds <= 0) {
      setTimerStarted(false);
    }
    //limpiar internalID
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [timerStarted, totalTimeSeconds, hours, minutes, seconds]);

  const changeHour = (e) => {
    setHours(e.target.value);
  };

  const changeMinute = (e) => {
    setMinutes(e.target.value);
  };

  const changeSecond = (e) => {
    setSeconds(e.target.value);
  };

  const startFunction = () => {
    setTimerStarted(true);
  };

  const stopFunction = () => {
    setTimerStarted(false);
  };

  const resetFunction = () => {
    setTimerStarted(false);
    setTotalTimeSeconds(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="flex gap-2 p-8 mt-12 border-4 place-content-center">
      <section className="grid items-center justify-center p-20 bg-white place-content-center">
        <div className="flex">
          <InputTime
            lenghtNum="2"
            classPlus="w-24"
            timeNumber={hours}
            changeEvent={changeHour}
          />
          <InputTime
            lenghtNum="2"
            classPlus="w-16"
            timeNumber={minutes}
            changeEvent={changeMinute}
          />
          <InputTime
            lenghtNum="2"
            classPlus="w-16"
            timeNumber={seconds}
            changeEvent={changeSecond}
          />
        </div>
        <div className="flex justify-center space-x-2">
          <ButtonB text="Start" functionB={startFunction} />
          <ButtonB text="Stop" functionB={stopFunction} />
          <ButtonB text="Reset" functionB={resetFunction} />
        </div>
      </section>
    </div>
  );
}
