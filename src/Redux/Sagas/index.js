import commonSaga from './CommonSaga'
import { all } from 'redux-saga/effects';
import customerSaga from './CustomerSaga';
import pharmacistSaga from './PharmacistSaga';
import authSaga from './AuthSaga';

//Main Root Saga
const rootSaga = function* rootSaga() {

  //When Saga is Single then you can call like this
  // yield AuthSaga()
  //if sagas are multiple then you can call like this
  yield all([
    authSaga(),
    commonSaga(),
    customerSaga(),
    pharmacistSaga()
  ])

};
export default rootSaga;