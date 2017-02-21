import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import todoApp from './reducers/';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const logger = createLogger();
  const store = createStore(todoApp, persistedState, applyMiddleware(logger));
  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
    });
  });

  return store;
};

export default configureStore;
