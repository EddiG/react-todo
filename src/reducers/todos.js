import { v4 } from 'node-uuid';

const addTodo = (state, action) => [
  ...state,
  {
    id: v4(),
    title: action.title,
    complete: action.complete,
  },
];

const toggleTodo = (state, action) =>
  state.map((todo) => {
    if (todo.id !== action.id) {
      return todo;
    }

    return {
      ...todo,
      complete: !todo.complete,
    };
  });

const deleteTodo = (state, action) =>
  state.reduce((acc, todo) => {
    if (todo.id !== action.id) {
      return [...acc, todo];
    }
    return acc;
  }, []);

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    case 'DELETE_TODO':
      return deleteTodo(state, action);
    default:
      return state;
  }
};

export default todos;
