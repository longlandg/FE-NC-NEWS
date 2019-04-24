import React, { Component } from "react";
import { navigate } from "@reach/router";
import Voter from "./Voter";

import { Link } from "@reach/router";

import {
  deleteComment,
  updateCommentsVotes,
  fetchAllCommentsByArticleId
} from "../Functions/apis";

class AllCommentsCard extends Component {
  state = {
    voteChange: 0
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.allComments.map(comment => {
            const { comments_id, created_at, author, body, votes } = comment;
            return (
              <li key={comments_id} className="individualCommentsCards">
                {/* <p className="tinytext">comment....</p> */}
                <p className="articledetails">Comment: {body}</p>
                <p className="tinytext">Date Posted: {created_at}</p>
                <p className="tinytext">Author: {author}</p>
                <p className="tinytext"> Comment Id: {comments_id}</p>

                <Voter
                  comments_id={comment.comments_id}
                  votes={comment.votes}
                  userName={this.props.userName}
                  loggedIn={this.props.loggedIn}
                  individualArticle={this.props.individualArticle}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllCommentsCard;

// const AllCommentsCard = props => {
//   return (
//     <div>
//       <ul>
//         {props.allComments.map(comment => {
//           const { comments_id, created_at, author, body } = comment;
//           return (
//             <li key={comments_id} className="individualCommentsCards">
//               {/* <p className="tinytext">comment....</p> */}
//               <p className="articledetails">Comment: {body}</p>
//               <p className="tinytext">Date Posted: {created_at}</p>
//               <p className="tinytext">Author: {author}</p>
//               <p className="tinytext"> Comment Id: {comments_id}</p>

//               <p className="tinytextblack">
//                 {" "}
//                 total votes:
//                 {/* {comment.votes + this.state.CommentVoteChange} */}
//               </p>
//               <div className="deletebutton">
//                 <button
//                   name={comments_id}
//                   className="deletebutton btn btn-warning btn-sm"
//                   type="button"
//                   disabled={props.userName !== author}
//                   onClick={props.clickHandler}
//                 >
//                   delete comment
//                 </button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default AllCommentsCard;
