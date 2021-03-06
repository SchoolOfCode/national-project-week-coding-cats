import './HighlightGoal.css';

function HighlightGoal({ highlightGoalText }) {
  return (
    <div className="highlight card card-3 card-center">
      <h2>Hackathon Highlight Goal</h2>
      <p>"{highlightGoalText}"</p>
    </div>
  );
}

export default HighlightGoal;
