import React from 'react';

class TodoForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onCreateTask(this.title.value);
    this.title.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref={(c) => { this.title = c; }} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onCreateTask: React.PropTypes.func.isRequired,
};

export default TodoForm;
