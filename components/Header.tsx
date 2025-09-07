import React from 'react';
import { ShipIcon, WifiIcon } from './Icons';

export const Header: React.FC = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    return `STARDATE ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} // ${date.toTimeString().split(' ')[0]}`;
  };

  return (
    <header className="bg-black border-2 border-voyager-purple p-3 flex justify-between items-center font-orbitron text-voyager-tan">
      <div className="flex items-center text-lg md:text-xl">
        <ShipIcon className="w-6 h-6 mr-3 animate-flicker text-voyager-blue" />
        <h1>SCOTT HARVEY-WHITTLE PORTFOLIO INTERFACE</h1>
      </div>
      
      <div className="hidden md:flex items-center text-sm gap-4">
        <p>{formatTime(time)}</p>
      </div>

      <div className="flex items-center text-sm">
        <span className="mr-2 text-voyager-blue">UPLINK: STABLE</span>
        <WifiIcon className="w-5 h-5 text-voyager-blue" />
      </div>
    </header>
  );
};