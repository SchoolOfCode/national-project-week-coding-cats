import { useState } from 'react';
import './Header.css';
import AppName from './AppName';
import Time from './Time';

function Header() {
  // State for the current time
  const [currentTime, setCurrentTime] = useState('');

  // Function which gets the current time
  function getTime() {
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes();
    // Updates the state with the current time
    setCurrentTime(time);
  }

  // Runs the getTime function every second
  setInterval(getTime, 1000);

  return (
    <div className="header">
      <AppName />
      <Time time={currentTime} />
    </div>
  );
}

export default Header;
