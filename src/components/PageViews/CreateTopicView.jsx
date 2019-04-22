import React, { Component } from "react";
import { navigate } from "@reach/router";
import { postTopic } from "../Functions/apis";

class CreateTopicView extends Component {
  state = {
    slug: "",
    description: ""
  };
  handleChange = event => {
    console.log(event.target.name);
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newTopic = this.state;

    postTopic(newTopic).then(res => {
      navigate(`/article/createquery/${this.state.slug}`);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Topic:
          <input
            name="slug"
            type="text"
            value={this.state.slug}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="create topic" />
      </form>
    );
  }
}
export default CreateTopicView;
