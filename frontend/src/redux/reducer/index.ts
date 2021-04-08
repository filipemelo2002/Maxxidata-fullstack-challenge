import { combineReducers } from 'redux';

import session from './session';
import admin from './admin';
export default combineReducers({
  session,
  admin,
});
