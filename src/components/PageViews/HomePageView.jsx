import React, { Component } from "react";

import { fetchAllArticles } from "../Functions/apis";

import SortBySelector from "../PageElements/SortBySelector";
import AllArticles from "../PageElements/AllArticles";

class HomePageView extends Component {
  state = {
    allArticles: null,
    sortBy: "",
    filterBy: "",
    topic: ""
  };

  render(props) {
    console.log(this.state.filterBy);
    console.log(this.state.topic);

    return (
      <div className="HomeView">
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
      </div>
    );
  }

  componentDidMount = () => {
    let filterby = "";
    if (this.props.topic === undefined) {
    } else if (this.props.topic) {
      filterby = `topic=${this.props.topic}&&`;
    }

    fetchAllArticles(filterby, this.state.sortBy).then(articles => {
      this.setState({
        allArticles: articles,
        filterBy: `topic=${this.props.topic}&&`,
        topic: this.props.topic
      });
    });
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

  homeFilterReset = event => {
    event.preventDefault();
    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  homeFilterReset = event => {
    event.preventDefault();
    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

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
      fetchAllArticles(filterBy, this.state.sortBy).then(articles => {
        this.setState({ allArticles: articles });
      });
    }
  };
}

export default HomePageView;
