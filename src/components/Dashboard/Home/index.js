import { useState, useEffect } from 'react';
import './Home.css';
import HighlightGoal from './HighlightGoal';
import KeyObjectives from './KeyObjectives';
import Schedule from './Schedule';
import TeamName from './TeamName';

function Home() {
  const [data, setData] = useState([]); //init data state

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://hackaplanner.herokuapp.com/users');
      const json = await response.json();
      //set data state
      setData(json.payload[0]);
    }
    //get data state from our API
    getData();
  }, []);

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
