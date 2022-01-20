import './Home.css';
import { useEffect } from 'react';
import TeamName from './TeamName';
import HighlightGoal from './HighlightGoal';
import Schedule from './Schedule';
import KeyObjectives from './KeyObjectives';

function Home({ getData, data }) {
  useEffect(() => {
    // Calls getData() function on first render of the page, and then for whenever the data state changes
    getData();
  }, [data]);

  return (
    <div className="home">
      <TeamName teamNameText={data.team_name} />
      <HighlightGoal highlightGoalText={data.highlight_goal} />
      <Schedule
        timeOne={data.time_one}
        timeTwo={data.time_two}
        timeThree={data.time_three}
        timeFour={data.time_four}
      />
      <KeyObjectives
        objectiveOne={data.key_objective_one}
        objectiveTwo={data.key_objective_two}
        objectiveThree={data.key_objective_three}
      />
    </div>
  );
}

export default Home;
