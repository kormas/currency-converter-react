import { useState } from "react";
import { useEffect } from 'react';
import "./style.css";

const Clock = ({ }) => {

  const nowDate = () => {
  const now = new Date();
  const days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
  const months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
  const dayOfWeek = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return <p className="clock">Dzisiaj jest {dayOfWeek}, {day} {month}, {hours}:{minutes}:{seconds}</p>;
  };

  const [currentTime, setCurrentTime] = useState(nowDate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(nowDate);
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  }, []);

  return currentTime;
};

export default Clock;