import React from "react";

const NewTopicForm = props => {
  return (
    <div className="NewTopicForm">
      <form onSubmit={props.handleSubmit}>
        <label>
          Description:
          <input
            required
            name="description"
            type="text"
            value={props.description}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Topic:
          <input
            required
            name="slug"
            type="text"
            value={props.slug}
            onChange={props.handleChange}
          />
        </label>

        <input type="submit" value="create topic" />
      </form>
    </div>
  );
};

export default NewTopicForm;
