// this is the actual code that combines all of our states together


import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
//below tells redux persist that you want to use local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);