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
      <label>
        Enter Team Name:
        <input
          type="text"
          name="team_name"
          value={inputs.team_name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Highlight Goal:
        <input
          type="text"
          name="highlight_goal"
          value={inputs.highlight_goal || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Key Objective One:
        <input
          type="text"
          name="key_objective_one"
          value={inputs.key_objective_one || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Key Objective Two:
        <input
          type="text"
          name="key_objective_two"
          value={inputs.key_objective_two || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Key Objective Three:
        <input
          type="text"
          name="key_objective_three"
          value={inputs.key_objective_three || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Time One:
        <input
          type="text"
          name="time_one"
          value={inputs.time_one || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Time Two:
        <input
          type="text"
          name="time_two"
          value={inputs.time_two || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Time Three:
        <input
          type="text"
          name="time_three"
          value={inputs.time_three || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Time Four:
        <input
          type="text"
          name="time_four"
          value={inputs.time_four || ''}
          onChange={handleChange}
        />
      </label>
      <input
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
