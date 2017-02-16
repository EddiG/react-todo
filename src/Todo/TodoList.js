import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => {
  const items = tasks.map(task => <TodoItem key={task.title} {...task} />);
  return (
    <ul>
      { items }
    </ul>);
};

TodoList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.shape({ title: '', complete: false })).isRequired,
};

export default TodoList;
