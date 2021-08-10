import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import appReducer from './reducers';

const middleware = [thunk];

export const store = createStore(appReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type AppStoreSchema = ReturnType<typeof store.getState>
