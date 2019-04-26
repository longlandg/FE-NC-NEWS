import React, { Component } from "react";
import { navigate } from "@reach/router";

class SignInForm extends Component {
  state = {
    inputBoxText: "",
    userNameExists: true
  };
  render() {
    return (
      <div className="SignInForm form-group">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control"
              placeholder="Enter username"
              id="SignInForm"
              type="text"
              value={this.state.inputBoxText}
              onChange={this.handleUserNameChange}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            LOG IN
          </button>
          <p>
            Please log in as one of the following example users "cooljmessy",
            "grumpy19 or "jessjelly"
          </p>
          {!this.state.userNameExists && (
            <h3>
              This username does not exist please log in with a valid username
            </h3>
          )}
        </form>
      </div>
    );
  }
  handleUserNameChange = event => {
    this.setState({ inputBoxText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const checkForUser = this.props.allUsers.filter(user => {
      return user.username === this.state.inputBoxText;
    });

    if (checkForUser.length === 1) {
      this.props.userLoginFunc(this.state.inputBoxText);
      this.setState({ userNameExists: true });
      navigate(`/users/${this.state.inputBoxText}`);
    } else {
      this.setState({ userNameExists: false });
    }
  };
}

export default SignInForm;
