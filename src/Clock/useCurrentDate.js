import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  }, []);

  return currentTime;
}