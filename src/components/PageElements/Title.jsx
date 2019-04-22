import React, { component } from "react";

const Title = props => {
  return (
    <div className="Title">
      {!props.userName ? (
        <h1 className="TitleLoggedOut">NC-NEWS</h1>
      ) : (
        <h1 className="TitleLoggedIn">NC-NEWS</h1>
      )}
    </div>
  );
};

export default Title;
// className="Title"
