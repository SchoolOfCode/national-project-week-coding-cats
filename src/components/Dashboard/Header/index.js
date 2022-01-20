import { useState } from 'react';
import './Header.css';
import AppName from './AppName';
import Time from './Time';

function Header() {
  // State for the current hours and minutes
  const [currentHours, setCurrentHours] = useState('');
  const [currentMinutes, setCurrentMinutes] = useState('');

  //adds a 0 in the time when minutes and hrs are under 10
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  // Function which gets the current time
  function getTime() {
    const today = new Date();
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
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
