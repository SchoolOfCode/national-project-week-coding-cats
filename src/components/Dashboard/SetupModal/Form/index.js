import { useState } from 'react';

function Form({ submitForm, getData }) {
  // State which contains all of the inputs from the form.
  // The default value of the state is an empty object.
  // The state expects the inputs to be returned as an object.
  const [inputs, setInputs] = useState({});

  // Hadnles form submission, compiles each input from the form into an object.
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Function for preventing page refresh, and
  // updates the inputs state with the information gathered from
  // the from.
  const handleSubmit = (event) => {
    event.preventDefault();
    postForm(inputs);
  };

  // ASYNC Function for posting the inputs state into the database API.
  async function postForm(data) {
    const url = 'https://hackaplanner.herokuapp.com/users';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  // JSX Form
  return (
    <form onSubmit={handleSubmit}>
      <p className="modal-welcome">
        <i>Welcome! We’ll ask you a few questions to get your plan setup.</i>
      </p>
      <label>
        What's your team name?
        <input
          placeholder="For Example: 'Kanban Friends'"
          className="team-name-question"
          type="text"
          name="team_name"
          value={inputs.team_name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        What would you like to achieve, as a team, during this hackathon?
        <input
          placeholder="For example: ‘We would like to make sure that all of us get to code for a bit’"
          className="highlight-goal"
          type="text"
          name="highlight_goal"
          value={inputs.highlight_goal || ''}
          onChange={handleChange}
        />
      </label>
      <p className="modal-section">
        <i>What are your team's three key objectives?</i>
      </p>

      <label>
        Key Objective One:
        <input
          placeholder="Please fill in the first objective."
          className="objective-one"
          type="text"
          name="key_objective_one"
          value={inputs.key_objective_one || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Key Objective Two:
        <input
          placeholder="Please fill in the second objective."
          className="objective-two"
          type="text"
          name="key_objective_two"
          value={inputs.key_objective_two || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Key Objective Three:
        <input
          placeholder="Please fill in the third objective."
          className="objective-three"
          type="text"
          name="key_objective_three"
          value={inputs.key_objective_three || ''}
          onChange={handleChange}
        />
      </label>
      <p className="modal-question modal-section">
        <i>
          What are you hoping to be working on at these points in time today?
        </i>
      </p>
      <label>
        09:30:
        <input
          className="time-one"
          type="text"
          name="time_one"
          value={inputs.time_one || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        10:30:
        <input
          className="time-two"
          type="text"
          name="time_two"
          value={inputs.time_two || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        14:30:
        <input
          className="time-three"
          type="text"
          name="time_three"
          value={inputs.time_three || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        15:30:
        <input
          className="time-four"
          type="text"
          name="time_four"
          value={inputs.time_four || ''}
          onChange={handleChange}
        />
      </label>
      <input
        className="submit-button"
        type="submit"
        onClick={() => {
          submitForm();
          getData();
        }}
      />
    </form>
  );
}

export default Form;
