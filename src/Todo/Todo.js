import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {addTask} from './TodoHelper'

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { title: 'Create Todo application', complete: false },
      ],
    };
  }

  onCreateTask = (title) => {
    const task = { title: title, complete: false }
    this.setState({ tasks: addTask(task, this.state.tasks) })
  }

  render() {
    return (
      <div>
        <TodoForm onCreateTask={this.onCreateTask} />
        <TodoList {...this.state} />
      </div>
    );
  }
}

export default Todo;
