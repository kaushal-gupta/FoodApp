import {createStore, combineReducers, applyMiddleware} from 'redux';
import AuthenticUser from '../reducers/authenticUser';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  authenticUser: AuthenticUser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
