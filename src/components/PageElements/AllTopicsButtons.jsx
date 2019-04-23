import React, { Component } from "react";

import { Link } from "@reach/router";

const AllTopicsButtons = props => {
  console.log(props);
  console.log(props.allTopicsSlugs);
  return (
    <>
      {props.allTopicsSlugs && (
        <div className="AllTopicsButtons">
          {/* <button>{props.allTopicsSlugs[0]}</button> */}
          {props.allTopicsSlugs.map(topic => {
            return (
              <Link to={"/"}>
                <button className="topicButton" key={topic} type="button">
                  {topic}
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllTopicsButtons;

//  <Link to={"/signin"}>
//             <button className="LogIn" type="button">
//               LOG IN
//             </button>
//           </Link>
// <ul>
//           {this.props.allArticles.map(article => {
//             const {
//               title,
//               topic,
//               created_at,
//               author,
//               comment_count,
//               votes,
//               article_id
//             } = article;
//             return (
//               <li key={article_id} className="individualArticleCards">
//                 {" "}
//                 <Link to={`/articles/${article_id}`}>
//                   <h4 className="articletitle">{title} </h4>
//                   <p className="tinytext">{topic} </p>
//                   <p className="tinytext">Date Posted: {created_at}</p>
//                   <p className="tinytext">Author: {author} </p>
//                   <p className="tinytext">
//                     Number of Comments: {comment_count}{" "}
//                   </p>
//                   <p className="tinytextblack">Votes: {votes}</p>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
