import { useState, useEffect } from 'react';
import './Home.css';
import HighlightGoal from './HighlightGoal';
import KeyObjectives from './KeyObjectives';
import Schedule from './Schedule';
import TeamName from './TeamName';

function Home() {
  // const [teamName, setTeamName] = useState('');

  // useEffect(() => {
  //   async function getTeamName() {
  //     const response = await fetch('https://hackaplanner.herokuapp.com/users');
  //     const data = await response.json();
  //     setTeamName(data.payload[0].team_name);
  //   }

  //   getTeamName();
  // }, []);

  //Plan for tomorrow:
  // Create a state that holds the API fetch request. The default state will be an array.
  // Create a useEffect to run on the first load of the page
  // Inside will have an fetch request to https://hackaplanner.herokuapp.com/users
  // Store the response into the state
  // Accessing the state for each of the props below

  return (
    <div className="home">
      <TeamName teamNameText="Mad Max" />
      <HighlightGoal highlightGoalText="Teamwork makes the dream work! Let’s get this API function sorted!" />
      <Schedule
        timeOne={'Do the thing that does the thing'}
        timeTwo="By now we should be implementing a neat feature"
        timeThree="Deploy awesome app"
        timeFour="Prep for presentations"
      />
      <KeyObjectives
        objectiveOne="Try some GitHub Branching"
        objectiveTwo="Implement async/await function to call api"
        objectiveThree="Create an awesome colour scheme that's never been seen before!"
      />
    </div>
  );
}

export default Home;
