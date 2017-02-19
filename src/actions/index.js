export const addTodo = title => ({
  type: 'ADD_TODO',
  title,
  complete: false,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter,
});
