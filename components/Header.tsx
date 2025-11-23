import React from 'react';
import { ShipIcon, WifiIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from './Icons';

interface HeaderProps {
    isMuted: boolean;
    toggleMute: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMuted, toggleMute }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    return `STARDATE ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} // ${date.toTimeString().split(' ')[0]}`;
  };

  return (
    <header className="bg-black border-2 border-voyager-purple p-3 flex justify-between items-center font-orbitron text-voyager-tan flex-wrap gap-2">
      <div className="flex items-center text-base md:text-xl">
        <ShipIcon className="w-6 h-6 mr-3 animate-flicker text-voyager-blue" />
        <h1>
            <span className="hidden md:inline">SCOTT HARVEY-WHITTLE </span>
            <span>PORTFOLIO INTERFACE</span>
        </h1>
      </div>
      
      <div className="hidden md:flex items-center text-sm gap-4">
        <p>{formatTime(time)}</p>
      </div>

      <div className="flex items-center text-sm">
        <button onClick={toggleMute} className="flex items-center mr-4 text-voyager-blue hover:text-voyager-orange transition-colors">
            {isMuted ? <SpeakerXMarkIcon className="w-6 h-6" /> : <SpeakerWaveIcon className="w-6 h-6" />}
            {isMuted && <span className="ml-2 hidden sm:inline">Unmute to enable sound</span>}
        </button>
        <span className="mr-2 text-voyager-blue">UPLINK: STABLE</span>
        <WifiIcon className="w-5 h-5 text-voyager-blue" />
      </div>
    </header>
  );
};
