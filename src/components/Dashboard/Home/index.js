import './Home.css';
import HighlightGoal from './HighlightGoal';
import KeyObjectives from './KeyObjectives';
import Schedule from './Schedule';
import TeamName from './TeamName';

function Home() {
  return (
    <div className="home">
      <TeamName />
      <HighlightGoal />
      <Schedule />
      <KeyObjectives />
    </div>
  );
}

export default Home;
