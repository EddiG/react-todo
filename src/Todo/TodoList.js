import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggleActive }) => {
  const items = tasks.map(task =>
    <TodoItem key={task.title} {...task} onToggleActive={onToggleActive} />);
  return (
    <ul>
      { items }
    </ul>);
};

TodoList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.shape({ title: '', complete: false })).isRequired,
  onToggleActive: React.PropTypes.func.isRequired,
};

export default TodoList;
