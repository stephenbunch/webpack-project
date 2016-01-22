import { createStore } from 'redux';
import rootReducer from './state';

export default function(initialState) {
  return createStore(rootReducer, initialState);
}
