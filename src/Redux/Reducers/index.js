import CommonReducer from './CommonReducer';
import AuthReducer from './AuthReducer';
import { combineReducers } from 'redux'
import CustomerReducer from './CustomerReducer';
import PharmacistReducer from './PharmacistReducer';

let appReducer = combineReducers({
  CommonReducer: CommonReducer,
  AuthReducer: AuthReducer,
  CustomerReducer: CustomerReducer,
  PharmacistReducer: PharmacistReducer
});

// CALLED WHEN LOGOUT REQUESTED TO CLEAR ALL STATE
const rootReducer = (state, action) => {
  //   if (action.type === LOGOUT_REQUEST) {
  //       state = undefined;
  //   }

  return appReducer(state, action)
}

export default rootReducer
