import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/';
import Todo from './components/Todo';

const store = createStore(todoApp);

const App = () =>
  <div>
    <Todo />
  </div>;

const ReduxApp = () =>
  <Provider store={store}>
    <App />
  </Provider>;

export default ReduxApp;
