import React, { component } from "react";

const Error = props => {
  return (
    <div className="Error">
      {props.ErrorMsg ? (
        <h3>{this.props.ErrorMsg}</h3>
      ) : (
        <h3>404 page not found</h3>
      )}
    </div>
  );
};

export default Error;
