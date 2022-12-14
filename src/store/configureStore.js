import {createStore, combineReducers} from 'redux';
import tokenReducer from './reducers/tokenReducer';

const rootReducer = combineReducers({
  auth: tokenReducer,
});

export const store = createStore(rootReducer);
