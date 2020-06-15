import { combineReducers } from 'redux';
import registrationFormReducer from './registrationFormReducer';

export default combineReducers({
  registrationForm: registrationFormReducer,
});
