import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/';
import logo from './logo.svg';
import Todo from './components/Todo';
import './App.css';

const store = createStore(todoApp);

const App = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Hello world!</h2>
    </div>
    <Todo />
  </div>;

const ReduxApp = () =>
  <Provider store={store}>
    <App />
  </Provider>;

export default ReduxApp;
