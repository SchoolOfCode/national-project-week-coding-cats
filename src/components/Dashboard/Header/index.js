import { useState } from 'react';
import './Header.css';
import AppName from './AppName';
import Time from './Time';

function Header() {
  // State for the current hours and minutes
  const [currentHours, setCurrentHours] = useState('');
  const [currentMinutes, setCurrentMinutes] = useState('');

  // Function which gets the current time
  function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    // Updates the state with the current hours and minutes
    setCurrentHours(hours);
    setCurrentMinutes(minutes);
  }

  // Runs the getTime function every second
  setInterval(getTime, 1000);

  return (
    <div className="header">
      <AppName />
      <Time hours={currentHours} minutes={currentMinutes} />
    </div>
  );
}

export default Header;
