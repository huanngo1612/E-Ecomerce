import { useEffect, useState } from "react";

function CountDown({ time }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => {
      const now = new Date().getTime();

      const distance = (time - now) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timeId);
      }
    }, 1000);
    return () => clearInterval(timeId);
  }, [time]);

  return (
    <div className="countdown">
      <span>
        {days} day: {hours} hr: {minutes} mn: {seconds}sec
      </span>
    </div>
  );
}

export default CountDown;
