import React, { component } from "react";

const Title = props => {
  console.log(props.userName);
  return (
    <div>
      {!props.userName ? <h1>NC-NEWS</h1> : <h1>NC-NEWS {props.userName}</h1>}
    </div>
  );
};

export default Title;
