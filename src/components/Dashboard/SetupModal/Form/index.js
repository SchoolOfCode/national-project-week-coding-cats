import { useState } from 'react';

function Form({ submitForm, getData }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    postForm(inputs);
  };

  //POST plan info into our database
  async function postForm(data) {
    const url = 'https://hackaplanner.herokuapp.com/users';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

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

// onClick={() => { func1(); func2();}}

/* {
    "team_name": "coding cats",
    "highlight_goal": "team work makes the dram work!Lets get this API sorted",
    "key_objective_one": "Try some GITHUB branching",
    "key_objective_two": " function to call api",
    "key_objective_three": "to make this happen",
    "time_one": "Do the thing that does the thing",
    "time_two": "By now we should be implementing a neat feature",
    "time_three": "Deploy an awesome App!",
    "time_four": "relax"
    }
*/
