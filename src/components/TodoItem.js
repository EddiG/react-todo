import React from 'react';
import { ListItem } from 'material-ui/List';

const TodoItem = ({ title, complete, onClick }) =>
  <ListItem
    primaryText={title}
    onClick={onClick}
    style={{
      textDecoration:
      complete ?
      'line-through' :
      'none',
      color:
      complete ?
      'gray' :
      'inherit',
    }}
  />;

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default TodoItem;
