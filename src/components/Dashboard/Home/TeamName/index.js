import './TeamName.css';

function TeamName({ teamNameText }) {
  return (
    <div className="team-name">
      <h2>{teamNameText}'s Dashboard</h2>
    </div>
  );
}

export default TeamName;
