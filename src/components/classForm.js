import React, { Component } from 'react';

export default class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      birthday: '',
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.logValues = this.logValues.bind(this);
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  logValues() {
    console.log(this.state);
  }



  render() {
    return (
      <>
        <div>Class Form</div>
        <form id="class-form">
          <label>
            First name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFormChange} />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleFormChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleFormChange} />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={this.state.age} onChange={this.handleFormChange} />
          </label>
          <label>
            Date of birth:
            <input type="date" name="birthday" value={this.state.birthday} onChange={this.handleFormChange} />
          </label>
          <button onClick={this.logValues} type="button">Click me to log current form values!</button>
        </form>
      </>
    )
  }
}
