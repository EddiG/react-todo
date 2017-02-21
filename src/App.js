import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './configureStore';
import Todo from './components/Todo';

// Needed for onTouchTap for MUI library
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MuiThemedApp = () =>
  <MuiThemeProvider>
    <Todo />
  </MuiThemeProvider>;

const RoutedApp = () =>
  <Router history={browserHistory}>
    <Route path="/(:filter)" component={MuiThemedApp} />
  </Router>;

const store = configureStore();
const ReduxApp = () =>
  <Provider store={store}>
    <RoutedApp />
  </Provider>;

export default ReduxApp;
