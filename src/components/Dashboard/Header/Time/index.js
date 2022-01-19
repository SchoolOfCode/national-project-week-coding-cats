import './Time.css';

function Time({ hours, minutes }) {
  return (
    <div className="time">
      <p>
        {hours}
        <span className="blink">:</span>
        {minutes}
      </p>
    </div>
  );
}

export default Time;
