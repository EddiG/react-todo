import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo';

const App = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Hello world!</h2>
    </div>
    <Todo />
  </div>;

export default App;
