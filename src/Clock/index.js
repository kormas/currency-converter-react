import { Timer } from "./styled"
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const currentTime = useCurrentDate();

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