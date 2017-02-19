import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoForm = ({ dispatch }) => {
  let title;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(title.value));
        title.value = '';
      }}
    >
      <input type="text" ref={(node) => { title = node; }} />
      <input type="submit" value="Add" />
    </form>
  );
};

TodoForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(TodoForm);
