import React from 'react';

const TodoItem = ({ title, complete, onToggle }) =>
  <li
    style={{
      textDecoration:
      complete ?
      'line-through' :
      'none',
    }}
  >
    <input
      type="checkbox"
      checked={complete}
      onChange={onToggle}
    />
    {title}
  </li>;

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default TodoItem;
