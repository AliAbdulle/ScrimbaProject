import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checked" ? this.setState({ [name]: checked}) : this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea value={"Some default value"} />
        <br />
        <label>
          <input
            type="checked"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is Friendly
        </label>
      </form>
    );
  }
}

export default Form;
