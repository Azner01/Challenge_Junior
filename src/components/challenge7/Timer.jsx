import { useState, useEffect } from "react";
import InputTime from "@components/challenge7/InputTime";
import ButtonB from "@components/challenge7/ButtonB";

export default function Timer() {
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    let s = seconds;
    let m = minutes * 60;
    let h = hours * 3600;
    // let totalTimeSeconds = seconds + minutes * 60 + hours * 3600;
    let totalTimeSeconds = h + m + s;
    // console.log(totalTimeSeconds);
    let intervalID;

    if (timerStarted === true) {
      intervalID = setInterval(() => {
        totalTimeSeconds -= 1;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setTimerStarted(false);
          return totalTimeSeconds;
        }
        setHours(Math.floor(totalTimeSeconds / 3600));
        setMinutes(Math.floor((totalTimeSeconds % 3600) / 60));
        setSeconds(totalTimeSeconds % 60);
        return totalTimeSeconds;
      }, 1000);
    } else {
      setTimerStarted(false);
    }
  });

  // console.log(seconds);

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
    useState(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div class="p-8 pt-24 flex gap-2 border-4">
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
