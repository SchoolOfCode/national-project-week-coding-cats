import './KeyObjectives.css';

function KeyObjectives({ objectiveOne, objectiveTwo, objectiveThree }) {
  return (
    <div className="key-objectives">
      <h2>Key objectives</h2>

      <p>
        {objectiveOne} <input type="checkbox" />
      </p>
      <p>
        {objectiveTwo} <input type="checkbox" />
      </p>
      <p>
        {objectiveThree} <input type="checkbox" />
      </p>
    </div>
  );
}

export default KeyObjectives;
