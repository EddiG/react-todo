import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Filters from './Filters';

const Todo = () =>
  <div>
    <TodoForm />
    <TodoList />
    <Filters />
  </div>;


export default Todo;
