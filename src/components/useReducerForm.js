import React, { useReducer } from 'react';

export default function UseReducerForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    birthday:  '',
  }

  const [formValues, setFormValues] = useReducer(
    (curVals, newVals) => ({ ...curVals, ...newVals }), initialValues
  )

  const { firstName, lastName, email, age, birthday } = formValues;

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormValues({ [name]: value })
  }

  function logValues() {
    console.log(formValues);
  }

  return (
    <>
      <div>useReducer Form</div>
      <form id="useReducer-form">
      <label>
        First name:
        <input type="text" name="firstName" value={firstName} onChange={handleFormChange}/>
      </label>
      <label>
        Last name:
        <input type="text" name="lastName" value={lastName} onChange={handleFormChange}/>
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleFormChange}/>
      </label>
      <label>
        Age:
        <input type="number" name="age" value={age} onChange={handleFormChange}/>
      </label>
      <label>
        Date of birth:
        <input type="date" name="birthday" value={birthday} onChange={handleFormChange}/>
      </label>
      <button onClick={logValues} type="button">Click me to log current form values!</button>
    </form>
  </>
  )
}