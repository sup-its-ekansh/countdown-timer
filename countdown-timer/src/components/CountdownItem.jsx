import { useEffect, useState } from 'react';
import './CountdownItem.css';

export default function CountdownItem({ value, label }) {
  const [timeValue, setTimeValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== timeValue) {
      setIsFlipping(true);

      const timeout = setTimeout(() => {
        setTimeValue(value);
        setIsFlipping(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [value, timeValue]);

  return (
    <div className="count">
      <div className={`flip-card-single ${isFlipping ? 'flipping' : ''}`}>
        <span>{timeValue}</span>
      </div>
      <p>{label}</p>
    </div>
  );
}
