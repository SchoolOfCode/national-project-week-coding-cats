import './Schedule.css';

function Schedule({ timeOne, timeTwo, timeThree, timeFour }) {
  return (
    <div className="schedule card">
      <h2>Your schedule for today:</h2>
      <p>09:30 - {timeOne}</p>
      <p>10:30 - {timeTwo}</p>
      <p>14:30 - {timeThree}</p>
      <p>15:30 - {timeFour}</p>
    </div>
  );
}

export default Schedule;
