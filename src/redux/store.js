import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;