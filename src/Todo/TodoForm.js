import React from 'react';

const TodoForm = ({ onCreate }) => {
  let title;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(title.value);
        title.value = '';
      }}
    >
      <input type="text" ref={(node) => { title = node; }} />
      <input type="submit" value="Add" />
    </form>
  );
};

TodoForm.propTypes = {
  onCreate: React.PropTypes.func.isRequired,
};

export default TodoForm;
