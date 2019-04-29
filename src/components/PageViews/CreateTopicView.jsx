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
      });
      this.setState({ allTopicsSlugs: slugArray });
    });
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <div>
        {!this.state.allTopicsSlugs && <h1>LOADING...</h1>}

        <>
          <p className="TopicWarnings">These are all the existing topics</p>
          <AllTopicsButtons allTopicsSlugs={this.state.allTopicsSlugs} />
        </>

        {this.props.userName ? (
          <div>
            {this.state.allTopicsSlugs && (
              <NewTopicForm
                slug={this.state.slug}
                description={this.state.description}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            )}
          </div>
        ) : (
          <p className="TopicWarnings">Please log in to create a topic</p>
        )}
        {this.state.topicChecker && <p>this topic already exists </p>}
      </div>
    );
  }
}

export default CreateTopicView;

//
//

// <div>
// {this.props.userName ? (
//   <div>
//     {this.state.topicChecker && <p>this topic already exists </p>}
//     {this.state.allTopicsSlugs && (
//       <AllTopicsButtons allTopicsSlugs={this.state.allTopicsSlugs} />
//     )}
//     {!this.state.allTopicsSlugs && <h1>LOADING...</h1>}
//     <NewTopicForm
//       slug={this.state.slug}
//       description={this.state.description}
//       handleSubmit={this.handleSubmit}
//       handleChange={this.handleChange}
//     />
//   </div>
// ) : (
//   <p>Please log in to create a topic</p>
// )}
// </div>
