import { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const [status, setStatus] = useState(0);

  useEffect(()=>{
  })

  function start() {
    console.log('start btn click')
  }

  function stop() {
    console.log('start btn stop')
  }

  function pause() {
    console.log('start btn pause')
  }

  function resume() {
    console.log('start btn resume')
  }

  return (
    <div className="card card-2">
      <span className="timer hour">{(timer.hour >= 10) ? timer.hour : '0' + timer.hour}</span>
      <span>:</span>
      <span className="timer minute">{(timer.minute >= 10) ? timer.minute : '0' + timer.minute}</span>
      <span>:</span>
      <span className="timer second">{(timer.second >= 10) ? timer.second : '0' + timer.second}</span>
      <button className="timer btn-start" onClick={start} >START</button>
      <button className="timer btn-stop" onClick={stop}>STOP</button>
      <button className="timer btn-pause" onClick={pause}>PAUSE</button>
      <button className="timer btn-resume" onClick={resume}>RESUME</button>
    </div>
  );
}

export default Timer;
