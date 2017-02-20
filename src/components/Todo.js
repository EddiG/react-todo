import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Filters from './Filters';

const Todo = () =>
  <div
    style={{
      width: '290px',
      margin: '0 auto',
    }}
  >
    <TodoForm />
    <TodoList />
    <Filters />
  </div>;


export default Todo;
