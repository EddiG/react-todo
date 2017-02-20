import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { addTodo } from '../actions';

const TodoForm = ({ dispatch }) => {
  let title;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(title.getValue()));
        title.input.value = '';
        title.setState({ hasValue: false });
      }}
    >
      <TextField
        hintText="New todo"
        ref={(comp) => { title = comp; }}
      />
    </form>
  );
};

TodoForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(TodoForm);
