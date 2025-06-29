import React from 'react';
import CountdownItem from './CountdownItem';

const calculateTimeLeft = (targetTime) => {
  const now = new Date().getTime();
  const difference = targetTime - now;

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  return {
    days: Math.max(0, Math.floor(difference / day)),
    hours: Math.max(0, Math.floor((difference % day) / hour)),
    minutes: Math.max(0, Math.floor((difference % hour) / minute)),
    seconds: Math.max(0, Math.floor((difference % minute) / second)),
    isOver: difference <= 0,
  };
};

export default function Countdown({ targetTime }) {
  const [timePending, setTimePending] = React.useState(calculateTimeLeft(targetTime));

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTimePending(calculateTimeLeft(targetTime));
    }, 1000);
    return () => clearInterval(timerId);
  }, [targetTime]);

  if (timePending.isOver) {
    return <h2>Countdown finished....!!!</h2>;
  }

  return (
    <div className="countdown-container">
      <h1>We're launching soon</h1>
      <div className="countdown">
        <CountdownItem value={timePending.days} label="Days" />
        <CountdownItem value={timePending.hours} label="Hours" />
        <CountdownItem value={timePending.minutes} label="Minutes" />
        <CountdownItem value={timePending.seconds} label="Seconds" />
      </div>
    </div>
  );
}
