import './Home.css';
import HighlightGoal from './HighlightGoal';
import KeyObjectives from './KeyObjectives';
import Schedule from './Schedule';
import TeamName from './TeamName';

function Home() {
  return (
    <div className="home">
      <TeamName teamNameText="Coding Cats" />
      <HighlightGoal highlightGoalText="Teamwork makes the dream work! Let’s get this API function sorted!" />
      <Schedule
        timeOne={'Do the thing that does the thing'}
        timeTwo="By now we should be implementing a neat feature"
        timeThree="Deploy awesome app"
        timeFour="Prep for presentations"
      />
      <KeyObjectives />
    </div>
  );
}

export default Home;
