import { applyMiddleware, createGitHub, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createGitHub(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
