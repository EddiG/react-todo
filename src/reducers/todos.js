const getNextTodoId = (todos) => {
  if (todos.length) {
    return Math.max(...todos.map(todo => todo.id)) + 1;
  }

  return 1;
};

const addTodo = (state, action) => [
  ...state,
  {
    id: getNextTodoId(state),
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

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    default:
      return state;
  }
};

export default todos;
