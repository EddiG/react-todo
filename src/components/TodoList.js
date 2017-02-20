import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, onToggle }) =>
  <List>
    {todos.map(todo =>
      <ListItem
        key={todo.id}
        primaryText={todo.title}
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration:
          todo.complete ?
          'line-through' :
          'none',
          color:
          todo.complete ?
          'gray' :
          'inherit',
        }}
      />)
    }
  </List>;

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    complete: React.PropTypes.bool,
  })).isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL_VISIBLE':
      return todos;
    case 'ACTIVE_VISIBLE':
      return todos.filter(todo => !todo.complete);
    case 'COMPLETE_VISIBLE':
      return todos.filter(todo => todo.complete);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = dispatch => ({
  onToggle: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
