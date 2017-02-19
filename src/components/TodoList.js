import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) =>
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onToggle={() => onToggle(todo.id)}
      />)
    }
  </ul>;

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
