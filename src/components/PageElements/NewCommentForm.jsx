import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

const NewCommentForm = props => {
  return (
    <div className="NewCommentForm">
      <form onSubmit={props.handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={props.value}
            onChange={props.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewCommentForm;
