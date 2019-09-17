import * as redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

export const configureStore = () => {
  const middlewares = [thunk];
  const middleWareEnhancer = redux.applyMiddleware(...middlewares);

  const createdStore = redux.createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  return createdStore;
};
