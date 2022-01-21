import './TeamName.css';

function TeamName({ teamNameText }) {
  return (
    <div className="team-name card card-1 card-center">
      <h2>{teamNameText}'s Dashboard</h2>
    </div>
  );
}

export default TeamName;
