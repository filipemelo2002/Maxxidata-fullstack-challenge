import { combineReducers } from 'redux';

import session from './session';
import admin from './admin';
import professionalType from './professionalType';
export default combineReducers({
  session,
  admin,
  professionalType,
});
