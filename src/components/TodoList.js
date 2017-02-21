import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { List, ListItem } from 'material-ui/List';
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
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    complete: React.PropTypes.bool,
  })).isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(todo => !todo.complete);
    case 'complete':
      return todos.filter(todo => todo.complete);
    default:
      return todos;
  }
};

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all'),
});

const mapDispatchToProps = dispatch => ({
  onToggle: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList));
