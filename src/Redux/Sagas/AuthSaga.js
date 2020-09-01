import { REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED, REFRESH_TOKEN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAILED, GET_LOGIN_REQUEST, CUSTOMER_REGISTRATION_FAILED, CUSTOMER_REGISTRATION_SUCCESS, CUSTOMER_REGISTRATION_REQUEST, PHARMACIST_REGISTRATION_SUCCESS, PHARMACIST_REGISTRATION_FAILED, PHARMACIST_REGISTRATION_REQUEST, PHARMACY_USER_LOGIN_SUCCESS, PHARMACY_USER_LOGIN_REQUEST, PHARMACY_USER_LOGIN_FAILED, LOG_OUT_SUCCESS, LOG_OUT_FAILED, LOG_OUT_REQUEST, VERIFY_OTP_REQUEST, RESEND_OTP_REQUEST, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILED, RESEND_OTP_SUCCESS, RESEND_OTP_FAILED, ADD_LOCATION_REQUEST, ADD_LOCATION_SUCCESS, ADD_LOCATION_FAILED, GET_LOCATION_SUCCESS, GET_LOCATION_FAILED, GET_LOCATION_REQUEST, SET_LOCATION_SUCCESS, SET_LOCATION_FAILED, SET_LOCATION_REQUEST, MANAGE_PROFILE_REQUEST, MANAGE_PROFILE_SUCCESS, MANAGE_PROFILE_FAILED, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED, CHANGE_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_REQUEST, SET_LOCAL_LOCATION_REQUEST, SET_LOCAL_LOCATION_SUCCESS, SET_LOCAL_LOCATION_FAILED, DELETE_LOCATION_REQUEST, DELETE_LOCATION_SUCCESS, DELETE_LOCATION_FAILED } from "../Types/Type";
import { put, call, takeEvery } from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';

// ====================== REFRESH TOKEN ======================
export const refreshTokenSaga = function* refreshTokenSaga({ params }) {
    try {
        const response = yield call(Api.refreshToken, params)
        yield put({ type: REFRESH_TOKEN_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: REFRESH_TOKEN_FAILED, payload: e });
    }
}

// ====================== GET LOGIN SAGA ======================
export const getLoginSaga = function* getLoginSaga({ params }) {
    try {
        const response = yield call(Api.getLogin, params)
        yield put({ type: GET_LOGIN_SUCCESS, payload: response, dataForLogin: params.personal_data_for_login });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_LOGIN_FAILED, payload: e });
    }
}

// ====================== LOG OUT SAGA ======================
export const logOutSaga = function* logOutSaga({ params }) {
    try {
        yield put({ type: LOG_OUT_SUCCESS, payload: null });
    }
    catch (e) {
        yield put({ type: LOG_OUT_FAILED, payload: e });
    }
}

// ====================== CUSTOMER REGISTRATION SAGA ======================
export const customerRegistrationSaga = function* customerRegistrationSaga({ params }) {
    try {
        const response = yield call(Api.customerRegistrationApi, params)
        yield put({ type: CUSTOMER_REGISTRATION_SUCCESS, payload: response, dataForLogin: params.personal_data_for_login });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: CUSTOMER_REGISTRATION_FAILED, payload: e });
    }
}

// ====================== PHARMACIST REGISTRATION SAGA ======================
export const pharmacistRegistrationSaga = function* pharmacistRegistrationSaga({ params }) {
    try {
        const response = yield call(Api.pharmacistRegistrationApi, params)
        yield put({ type: PHARMACIST_REGISTRATION_SUCCESS, payload: response, dataForLogin: params.personal_data_for_login });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: PHARMACIST_REGISTRATION_FAILED, payload: e });
    }
}


// ====================== PHARMACY USER SAGA ======================
export const pharmacyUserLoginSaga = function* pharmacyUserLoginSaga({ params }) {
    try {
        const response = yield call(Api.pharmacyUserLoginApi, params)
        yield put({ type: PHARMACY_USER_LOGIN_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: PHARMACY_USER_LOGIN_FAILED, payload: e });
    }
}


// ====================== VERIFY OTP SAGA ======================
export const verifyOtpSaga = function* verifyOtpSaga({ params }) {
    try {
        const response = yield call(Api.verifyOtpApi, params)
        yield put({ type: VERIFY_OTP_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: VERIFY_OTP_FAILED, payload: e });
    }
}

// ====================== RESEND OTP SAGA ======================
export const resendOtpSaga = function* resendOtpSaga({ params }) {
    try {
        const response = yield call(Api.resendOtpApi, params)
        yield put({ type: RESEND_OTP_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: RESEND_OTP_FAILED, payload: e });
    }
}

// ====================== ADD LOCATION SAGA ======================
export const addLocationSaga = function* addLocationSaga({ params }) {
    try {
        const response = yield call(Api.addLocationApi, params)
        yield put({ type: ADD_LOCATION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: ADD_LOCATION_FAILED, payload: e });
    }
}

// ====================== GET LOCATION SAGA ======================
export const getLocationSaga = function* getLocationSaga({ params }) {
    try {
        const response = yield call(Api.getLocationApi, params)
        yield put({ type: GET_LOCATION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_LOCATION_FAILED, payload: e });
    }
}


// ====================== SET LOCATION SAGA ======================
export const setLocationSaga = function* setLocationSaga({ params }) {
    try {
        const response = yield call(Api.setLocationApi, params)
        yield put({ type: SET_LOCATION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: SET_LOCATION_FAILED, payload: e });
    }
}

// ====================== DELETE LOCATION SAGA ======================
export const deleteLocationSaga = function* deleteLocationSaga({ params }) {
    try {
        const response = yield call(Api.deleteLocationApi, params)
        yield put({ type: DELETE_LOCATION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: DELETE_LOCATION_FAILED, payload: e });
    }
}

// ====================== SET LOCAL LOCATION SAGA ======================
export const setLocalLocationSaga = function* setLocalLocationSaga({ params }) {
    try {
        yield put({ type: SET_LOCAL_LOCATION_SUCCESS, payload: params });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: SET_LOCAL_LOCATION_FAILED, payload: e });
    }
}



// ====================== MANAGE PROFILE SAGA ======================
export const manageProfileSaga = function* manageProfileSaga({ params }) {
    try {
        const response = yield call(Api.manageProfileApi, params)
        yield put({ type: MANAGE_PROFILE_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: MANAGE_PROFILE_FAILED, payload: e });
    }
}

// ====================== CHANGE PASSWORD SAGA ======================
export const changePasswordSaga = function* changePasswordSaga({ params }) {
    try {
        const response = yield call(Api.changePasswordApi, params)
        yield put({ type: CHANGE_PASSWORD_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: CHANGE_PASSWORD_FAILED, payload: e });
    }
}

// ====================== FORGOT PASSWORD SAGA ======================
export const forgotPasswordSaga = function* forgotPasswordSaga({ params }) {
    try {
        const response = yield call(Api.forgotPasswordApi, params)
        yield put({ type: FORGOT_PASSWORD_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: FORGOT_PASSWORD_FAILED, payload: e });
    }
}
export function* authSaga() {
    yield takeEvery(REFRESH_TOKEN_REQUEST, refreshTokenSaga);
    yield takeEvery(GET_LOGIN_REQUEST, getLoginSaga);
    yield takeEvery(LOG_OUT_REQUEST, logOutSaga);
    yield takeEvery(CUSTOMER_REGISTRATION_REQUEST, customerRegistrationSaga);
    yield takeEvery(PHARMACIST_REGISTRATION_REQUEST, pharmacistRegistrationSaga);
    yield takeEvery(PHARMACY_USER_LOGIN_REQUEST, pharmacyUserLoginSaga);
    yield takeEvery(VERIFY_OTP_REQUEST, verifyOtpSaga);
    yield takeEvery(RESEND_OTP_REQUEST, resendOtpSaga);
    yield takeEvery(ADD_LOCATION_REQUEST, addLocationSaga);
    yield takeEvery(GET_LOCATION_REQUEST, getLocationSaga);
    yield takeEvery(SET_LOCATION_REQUEST, setLocationSaga);
    yield takeEvery(DELETE_LOCATION_REQUEST, deleteLocationSaga);
    yield takeEvery(MANAGE_PROFILE_REQUEST, manageProfileSaga);
    yield takeEvery(CHANGE_PASSWORD_REQUEST, changePasswordSaga);
    yield takeEvery(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
    yield takeEvery(SET_LOCAL_LOCATION_REQUEST, setLocalLocationSaga);
}
export default authSaga;