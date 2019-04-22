import React, { Component } from "react";
import { navigate } from "@reach/router";
import { postTopic, fetchAllTopics } from "../Functions/apis";
import NewTopicForm from "../PageElements/NewTopicForm";

class CreateTopicView extends Component {
  state = {
    slug: "",
    description: "",
    allTopicsSlugs: ""
  };
  handleChange = event => {
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

  componentDidMount = () => {
    fetchAllTopics().then(topics => {
      const slugArray = [];
      topics.forEach(topic => {
        slugArray.push(topics.slug);
        console.log(slugArray);
      });
      this.setState({ allTopicsSlugs: slugArray });
    });
  };

  render() {
    return (
      <NewTopicForm
        slug={this.state.slug}
        description={this.state.description}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
export default CreateTopicView;
