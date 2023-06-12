import React from "react";
import { useState, useEffect } from "react";

interface TimerProps {
  initialMinute?: number;
  initialSeconds?: number;
  getTimeElapsed(timeElapsed: string): void;
}

const CountDownTimer: React.FC<TimerProps> = (props) => {
  const { initialMinute = 2, initialSeconds = 0, getTimeElapsed } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  const sendData = () => {
    const minutesElapsed = initialMinute - 1 - minutes;
    const secondElapsed = 60 - seconds;
    const totalTimeElapsed = `${minutesElapsed}:${
      secondElapsed < 10 ? "0" + secondElapsed : secondElapsed
    }s`;
    getTimeElapsed(totalTimeElapsed);
  };
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      sendData();
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}s
          {/* <input
            hidden={false}
            type="text"
            value={minutes + ":" + seconds}
            onChange={getTimeElapsed}
          /> */}
        </h1>
      )}
    </div>
  );
};

export default CountDownTimer;
