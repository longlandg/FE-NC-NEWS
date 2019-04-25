import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fetchAllArticles } from "../Functions/apis";

import SortBySelector from "../PageElements/SortBySelector";
import AllArticles from "../PageElements/AllArticles";

class HomePageView extends Component {
  state = {
    allArticles: null,
    sortBy: "",
    filterBy: "",
    topic: "",
    noArticlesForTopic: false
  };

  render(props) {
    console.log(this.state.filterBy);
    console.log(this.state.topic);

    return (
      <div className="HomeView">
        {!this.state.allArticles && <h1>LOADING...</h1>}
        <div className="SortBySelector">
          <SortBySelector
            allArticles={this.state.allArticles}
            changeSorting={this.changeSorting}
            filterBy={`topic=${this.props.topic}&&`}
          />
        </div>
        {this.state.allArticles && (
          <AllArticles
            allArticles={this.state.allArticles}
            loggedIn={this.props.loggedIn}
          />
        )}
        {this.state.noArticlesForTopic && (
          <p>At the moment there are no articles for this topic</p>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    let filterby = "";
    if (this.props.topic === undefined) {
    } else if (this.props.topic) {
      filterby = `topic=${this.props.topic}&&`;
    }

    fetchAllArticles(filterby, this.state.sortBy)
      .then(articles => {
        this.setState({
          allArticles: articles,
          filterBy: `topic=${this.props.topic}&&`,
          topic: this.props.topic
        });
      })
      .catch(
        err => {
          if (err.response.status === 422) {
            this.setState({ noArticlesForTopic: true });
          } else if (err.response.status === 404) {
            navigate(`/Error/${err.response.status}`);
          }
        }
        // console.log("this is the catch error", err.response)
        // this.setState({ Error: true })
        // console.log("this is the catch error", err.response.data.msg)
      );
  };

  // componentDidMount = () => {
  //   console.log("i mounted again");
  //   this.setState({ filterBy: `topic=${this.props.topic}&&` });
  //   let filterby = "";
  //   if (this.props.topic === undefined) {
  //     // this.setState({ filterBy: "" });
  //   } else if (this.props.topic) {
  //     filterby = `topic=${this.props.topic}&&`;
  //   }

  //   fetchAllArticles(filterby, this.state.sortBy).then(articles => {
  //     this.setState({
  //       allArticles: articles,
  //       filterBy: `topic=${this.props.topic}&&`,
  //       topic: this.props.topic
  //     });
  //   });
  // };

  changeSorting = event => {
    event.preventDefault();

    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  // homeFilterReset = event => {
  //   event.preventDefault();
  //   if (event.target.value !== this.state.sortBy) {
  //     this.setState({ sortBy: event.target.value });
  //   }
  // };

  // homeFilterReset = event => {
  //   event.preventDefault();
  //   if (event.target.value !== this.state.sortBy) {
  //     this.setState({ sortBy: event.target.value });
  //   }
  // };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    let filterBy = "";
    if (this.props.topic) {
      filterBy = `topic=${this.props.topic}&&`;
    } else {
      filterBy = "";
    }
    if (
      this.state.sortBy !== prevState.sortBy ||
      prevProps.path !== this.props.path
    ) {
      fetchAllArticles(filterBy, this.state.sortBy)
        .then(articles => {
          this.setState({ allArticles: articles });
        })
        .catch(
          err => this.setState({ Error: true })
          // console.log("this is the catch error", err.response.data.msg)
        );
    }
  };
}

export default HomePageView;
