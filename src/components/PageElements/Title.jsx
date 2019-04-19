import React, { component } from "react";

const Title = props => {
  return (
    <div className="Title">
      {!props.userName ? <h1>NC-NEWS</h1> : <h1>NC-NEWS {props.userName}</h1>}
    </div>
  );
};

export default Title;
