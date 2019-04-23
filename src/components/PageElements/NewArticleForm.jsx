import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
const NewArticleForm = props => {
  console.log(props);
  return (
    <div className="NewArticleForm">
      <form
        onSubmit={props.handleSubmit}
        className="text-center border border-light p-5"
      >
        <input
          type="text"
          name="title"
          id="defaultContactFormName"
          className="form-control mb-4"
          placeholder="Article title"
          value={props.title}
          onChange={props.handleChange}
          required
        />

        {!props.newTopic && (
          <input
            type="text"
            name="topic"
            id="defaultContactFormEmail"
            className="form-control mb-4"
            placeholder="Article topic"
            value={props.newTopic}
            onChange={props.handleChange}
            required
          />
        )}

        <div className="form-group">
          <textarea
            name="body"
            className="form-control rounded-0"
            id="exampleFormControlTextarea2"
            rows="10"
            placeholder="Write your article here"
            value={props.body}
            onChange={props.handleChange}
            required
          />
        </div>
        <button className="btn btn-info btn-block" type="submit">
          Send
        </button>
        {props.TopicDoesExist && (
          <p>
            This topic doesnot exist you need to{" "}
            <Link to={`/topics/createtopic`}>
              <hp className="articledetails">create new topic</hp>
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default NewArticleForm;
