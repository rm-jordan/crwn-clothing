import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// note the documentation shows we expect an array

const middlewares = [logger];
//this syntax is more scalable, probably will need to add things to this as we continue to build

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

