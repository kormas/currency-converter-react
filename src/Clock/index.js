import { useState } from "react";
import { useEffect } from 'react';
import "./style.css";

const Clock = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  }, []);

  return (
    <p className="clock">
      Dzisiaj jest
      {" "}
      {currentTime.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long"
    })}
    </p>
  )
};

export default Clock;