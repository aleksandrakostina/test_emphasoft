import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { loginReducer } from './reducers/loginReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
  login: loginReducer,
  users: usersReducer,
  form: formReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;