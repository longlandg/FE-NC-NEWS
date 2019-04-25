import React, { Component } from "react";
import { navigate } from "@reach/router";
import { postTopic, fetchAllTopics } from "../Functions/apis";
import NewTopicForm from "../PageElements/NewTopicForm";
import AllTopicsButtons from "../PageElements/AllTopicsButtons";

class CreateTopicView extends Component {
  state = {
    slug: "",
    description: "",
    allTopicsSlugs: null,
    topicChecker: null
  };
  handleChange = event => {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let topicChecker = this.state.allTopicsSlugs.filter(slug => {
      return slug === this.state.slug;
    });
    if (topicChecker.length === 0) {
      const newTopic = {
        slug: this.state.slug,
        description: this.state.description
      };
      postTopic(newTopic).then(res => {
        navigate(`/article/createquery/${this.state.slug}`);
      });
      this.setState({ topicChecker: null });
    } else this.setState({ topicChecker: topicChecker.length });
  };

  componentDidMount = () => {
    fetchAllTopics().then(topics => {
      const slugArray = [];
      topics.forEach(topic => {
        slugArray.push(topic.slug);
        console.log(slugArray);
      });
      this.setState({ allTopicsSlugs: slugArray });
    });
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <div>
        {!this.state.allTopicsSlugs && <h1>LOADING...</h1>}
        <NewTopicForm
          slug={this.state.slug}
          description={this.state.description}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.topicChecker && <p>this topic already exists </p>}
        {this.state.allTopicsSlugs && (
          <AllTopicsButtons allTopicsSlugs={this.state.allTopicsSlugs} />
        )}
      </div>
    );
  }
}
export default CreateTopicView;
