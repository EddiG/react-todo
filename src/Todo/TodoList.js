import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggleActive }) =>
  <ul>
    {tasks.map(task =>
      <TodoItem
        key={task.title}
        {...task}
        onToggleActive={() => onToggleActive(task.title)}
      />)
    }
  </ul>;

TodoList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.shape({ title: '', complete: false })).isRequired,
  onToggleActive: React.PropTypes.func.isRequired,
};

export default TodoList;
