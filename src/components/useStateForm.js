import React, { useState } from 'react';

export default function UseStateForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');

  function logValues() {
    const values = {
      firstName,
      lastName,
      email,
      age,
      birthday,
    }
    console.log(values);
  }

  return (
    <>
      <div>useState Form</div>
      <form id="useState-form">
        <label>
          First name:
          <input type="text" name="firstName" value={firstName} onChange={(event)=> setFirstName(event.target.value)} />
        </label>
        <label>
          Last name:
          <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <label>
          Date of birth:
          <input type="date" name="birthday" value={birthday} onChange={(event) => setBirthday(event.target.value)} />
        </label>
        <button onClick={logValues} type="button">Click me to log current form values!</button>
      </form>
    </>
  )
}