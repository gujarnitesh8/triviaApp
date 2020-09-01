import { GET_PHARMACIES_SUCCESS, GET_PHARMACIES_REQUEST, GET_PHARMACIES_FAILED, CREATE_PRESCRIPTION_REQUEST, CREATE_PRESCRIPTION_SUCCESS, CREATE_PRESCRIPTION_FAILED, GET_PRESCRIPTION_SUCCESS, GET_PRESCRIPTION_FAILED, GET_PRESCRIPTION_REQUEST, GET_PRESCRIPTION_DETAILS_SUCCESS, GET_PRESCRIPTION_DETAILS_FAILED, GET_PRESCRIPTION_DETAILS_REQUEST, DELETE_PRESCRIPTION_SUCCESS, DELETE_PRESCRIPTION_FAILED, DELETE_PRESCRIPTION_REQUEST, SUBMIT_ORDER_REQUEST, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_FAILED } from "../Types/Type";
import { put, call, takeEvery } from 'redux-saga/effects';
import Api from '../Api';


// ====================== GET STORE LIST ======================


// ====================== TRACK APPOINTMENT SAGA ======================
export const getPharmaciesSaga = function* getPharmaciesSaga({ params }) {
    try {
        const response = yield call(Api.getPharmacies, params)
        yield put({ type: GET_PHARMACIES_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_PHARMACIES_FAILED, payload: e });
    }
}

// ====================== CREATE PRESCRIPTION SAGA ======================
export const createPrescriptionSaga = function* createPrescriptionSaga({ params }) {
    try {
        const response = yield call(Api.createPrescription, params)
        yield put({ type: CREATE_PRESCRIPTION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: CREATE_PRESCRIPTION_FAILED, payload: e });
    }
}
// ====================== GET PRESCRIPTION LIST SAGA ======================
export const getPrescriptionsListSaga = function* getPrescriptionsListSaga({ params }) {
    try {
        const response = yield call(Api.getPrescriptionsList, params)
        yield put({ type: GET_PRESCRIPTION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_PRESCRIPTION_FAILED, payload: e });
    }
}


// ====================== GET PRESCRIPTION DETAILS SAGA ======================
export const getPrescriptionsDetailsSaga = function* getPrescriptionsDetailsSaga({ params }) {
    try {
        const response = yield call(Api.getPrescriptionsDetails, params)
        yield put({ type: GET_PRESCRIPTION_DETAILS_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_PRESCRIPTION_DETAILS_FAILED, payload: e });
    }
}

// ====================== DELETE PRESCRIPTION SAGA ======================
export const deletePrescriptionsSaga = function* deletePrescriptionsSaga({ params }) {
    try {
        const response = yield call(Api.deletePrescription, params)
        yield put({ type: DELETE_PRESCRIPTION_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: DELETE_PRESCRIPTION_FAILED, payload: e });
    }
}

// ====================== SUBMIT ORDER SAGA ======================
export const submitOrderSaga = function* submitOrderSaga({ params }) {
    try {
        const response = yield call(Api.submitOrder, params)
        yield put({ type: SUBMIT_ORDER_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: SUBMIT_ORDER_FAILED, payload: e });
    }
}
export function* customerSaga() {
    yield takeEvery(GET_PHARMACIES_REQUEST, getPharmaciesSaga);
    yield takeEvery(CREATE_PRESCRIPTION_REQUEST, createPrescriptionSaga);
    yield takeEvery(GET_PRESCRIPTION_REQUEST, getPrescriptionsListSaga);
    yield takeEvery(GET_PRESCRIPTION_DETAILS_REQUEST, getPrescriptionsDetailsSaga);
    yield takeEvery(DELETE_PRESCRIPTION_REQUEST, deletePrescriptionsSaga);
    yield takeEvery(SUBMIT_ORDER_REQUEST, submitOrderSaga);
}
export default customerSaga;