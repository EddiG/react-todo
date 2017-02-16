import React from 'react';

const TodoItem = ({ title, complete }) =>
  <li><input type="checkbox" checked={complete} />{title}</li>;

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
};

export default TodoItem;
