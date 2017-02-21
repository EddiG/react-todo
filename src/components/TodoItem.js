import React from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const TodoItem = ({ title, complete, onClick, onDelete }) =>
  <ListItem
    primaryText={title}
    onClick={onClick}
    rightIconButton={
      <IconButton
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      ><ActionDelete /></IconButton>
    }
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
  onDelete: React.PropTypes.func.isRequired,
};

export default TodoItem;
