import { createStore } from 'redux';
import { reducer } from './reducers';
export * from './initialState';

export const storeFactory = initialState => {
  return createStore(reducer, initialState);
};
