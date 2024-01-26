import { useState } from "react";
import { useEffect } from "react";
import { Timer } from "./styled"

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
    <Timer>
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
    </Timer>
  )
};

export default Clock;