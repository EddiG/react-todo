import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { List } from 'material-ui/List';
import TodoItem from './TodoItem';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, onToggle }) =>
  <List>
    {todos.map(todo =>
      <TodoItem
        {...todo}
        key={todo.id}
        onClick={() => onToggle(todo.id)}
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
