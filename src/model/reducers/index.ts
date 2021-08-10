import { combineReducers } from 'redux';

import app from './app';
import auth from './auth';
import {categoryReducer} from './categories';
import register from './register';
import {userReducer} from './user';

export default combineReducers({
  auth,
  app,
  register,
  user: userReducer,
  categories: categoryReducer,
});
