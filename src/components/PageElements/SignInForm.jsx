import React, { Component } from "react";
import { navigate } from "@reach/router";

class SignInForm extends Component {
  state = {
    inputBoxText: ""
  };
  render() {
    return (
      <div className="SignInForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            UserName:
            <input
              id="SignInForm"
              type="text"
              value={this.state.inputBoxText}
              onChange={this.handleUserNameChange}
            />
          </label>
          <input type="submit" value="login" />
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
      navigate(`/users/${this.state.inputBoxText}`);
    } else {
      navigate(`/signin`);
    }
  };
}

export default SignInForm;