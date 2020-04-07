import React, { Component } from "react";

class AllInTag extends Component {
  constructor() {
    super()
    this.state = {
        firstName: "",
        lastName: "",
        age: 0,
        gender: "",
        destination: "",
        dietaryRestrictions: []
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}

  render() {
    return (
      <main>
        <form>
          <input
            name="FirstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="LastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="Age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          {/* Create radio buttons for gender here */}
          <br />

          {/* Create select box for location here */}
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {/* Age here */}</p>
        <p>Your gender: {/* Gender here */}</p>
        <p>Your destination: {/* Destination here */}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}

export default AllInTag;
