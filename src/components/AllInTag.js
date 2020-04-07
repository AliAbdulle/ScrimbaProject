import React, { Component } from "react";

class AllInTag extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />
          {/* Create radio buttons for gender here */}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          {/* Create select box for location here */}
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="usa">USA</option>
            <option value="somali">Somalia</option>
            <option value="kenya">Kenya</option>
            <option value="germany">Germany</option>
            <option value="england">England</option>
            <option value="denmark">Denmark</option>
          </select>
          {/* Create check boxes for dietary restrictions here */}
          <br />
          <label>
              <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isVegan}
              /> Vegan
          </label>
          <br />
          <label>
              <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isKosher}
              /> Kosher
          </label>
          <br />
          <label>
              <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isLactoseFree}
              /> Lactose Free
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}

export default AllInTag;
