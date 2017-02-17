import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { addTask, toggleComplete } from './TodoHelper';

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { title: 'Create Todo application', complete: false },
      ],
    };
  }

  onCreate = (title) => {
    const newTask = { title, complete: false };
    this.setState({ ...this.state, tasks: addTask(newTask, this.state.tasks) });
  }

  onToggleActive = (title) => {
    this.setState({ ...this.state, tasks: toggleComplete(title, this.state.tasks) });
  }

  render() {
    return (
      <div>
        <TodoForm onCreate={this.onCreate} />
        <TodoList {...this.state} onToggleActive={this.onToggleActive} />
      </div>
    );
  }
}

export default Todo;
