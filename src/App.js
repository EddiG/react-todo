import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import todoApp from './reducers/';
import Todo from './components/Todo';

const store = createStore(todoApp, applyMiddleware(createLogger()));

// Needed for onTouchTap for MUI library
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MuiThemedApp = () =>
  <MuiThemeProvider>
    <Todo />
  </MuiThemeProvider>;

const ReduxApp = () =>
  <Provider store={store}>
    <MuiThemedApp />
  </Provider>;

export default ReduxApp;
