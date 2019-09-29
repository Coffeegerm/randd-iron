import * as redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

export const configureStore = () => {
  const middleware = [thunk];
  const middleWareEnhancer = redux.applyMiddleware(...middleware);

  const createdStore = redux.createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  return createdStore;
};
