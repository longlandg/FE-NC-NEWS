import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

import { deleteComment } from "../Functions/apis";

const AllCommentsCard = props => {
  return (
    <div>
      <ul>
        {props.allComments.map(comment => {
          const { comments_id, created_at, author, body } = comment;
          return (
            <li key={comments_id} className="individualCommentsCards">
              {/* <p className="tinytext">comment....</p> */}
              <p className="articledetails">Comment: {body}</p>
              <p className="tinytext">Date Posted: {created_at}</p>
              <p className="tinytext">Author: {author}</p>
              <p className="tinytext"> Comment Id: {comments_id}</p>

              <p className="tinytextblack">
                {" "}
                total votes:
                {/* {comment.votes + this.state.CommentVoteChange} */}
              </p>
              <div className="deletebutton">
                <button
                  name={comments_id}
                  className="deletebutton btn btn-warning btn-sm"
                  type="button"
                  disabled={props.userName !== author}
                  onClick={props.clickHandler}
                >
                  delete comment
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllCommentsCard;
