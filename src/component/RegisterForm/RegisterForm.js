import React, { useReducer } from 'react';

import './RegisterForm.scss';

const RegisterForm = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      password: '',
      address: '',
      interested: 'bitcoin',
    }
  )

  const handleInputChage = (e) => {
    const { name, value } = e.target;
    setUserInput({
      [name]: value,
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { username, interested, address } = userInput;
    localStorage.setItem('user_profile', JSON.stringify({
      username,
      address,
      interested
    }));
    alert('Register successfully');
    window.location.reload();
  }

  return (
    <div className="register-form">
      <h1>Register Form</h1>
      <form className="submit-form" onSubmit={handleSubmitForm}>
        <div className="input-row">
          <label>
            Username:
          </label>
          <input
            placeholder="Username"
            required
            autoComplete="off"
            name="username"
            value={userInput.username}
            type="text"
            onChange={handleInputChage}
          />
        </div>
        <div className="input-row">
          <label>
            Password:
          </label>
          <input
            placeholder="Password"
            required
            autoComplete="off"
            name="password"
            value={userInput.password}
            type="password"
            onChange={handleInputChage}
          />
        </div>
        <div className="input-row">
          <label>
            Address:
          </label>
          <input
            placeholder="Address"
            required
            autoComplete="off"
            name="address"
            value={userInput.address}
            type="text"
            onChange={handleInputChage}
          />
        </div>
        <div className="input-row">
          <label>
            Interested:
          </label>
          <select
            name="interested"
            onChange={handleInputChage} 
            value={userInput.interested}
            defaultValue="bitcoin"
          >
            <option value="bitcoin">
              Bitcon
            </option>
            <option value="apple">
              Apple
            </option>
            <option value="earthquake">
              Earthquake
            </option>
            <option value="animal">
              Animal
            </option>
          </select>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
};

export default RegisterForm;
