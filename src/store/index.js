// external imports
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

// root reducer import
import rootReducer from './reducers';

// Middlewares
const middlewares = [thunkMiddleware];
// middlewares.push(any_middleware)

const configureStore = () => {
  // Middleware Enhancer
  const middlewareEnhancer = applyMiddleware(...middlewares);
  // Store configuration for Development
  return createStore(rootReducer, undefined, middlewareEnhancer);
};

const store = configureStore();

export default store;
