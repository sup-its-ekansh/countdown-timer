import React from 'react';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

export default function App() {
  const [targetTime, setTargetTime] = React.useState(null);

  React.useEffect(() => {
    const currentDate = new Date();
    const tomorrowDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()+14, 
      currentDate.getHours(),
      currentDate.getMinutes(),
      0
    );
    setTargetTime(tomorrowDate.getTime());
  }, []);

  return (
    <div className="container">
      {targetTime ? (
        <Countdown targetTime={targetTime} />
      ) : (
        <h2>Setting up countdown...</h2>
      )}
      <Footer />
    </div>
  );
}
