import React from 'react';

const TodoItem = ({ title, complete, onToggleActive }) =>
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
      onChange={() => onToggleActive(title)}
    />
    {title}
  </li>;

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
  onToggleActive: React.PropTypes.func.isRequired,
};

export default TodoItem;
