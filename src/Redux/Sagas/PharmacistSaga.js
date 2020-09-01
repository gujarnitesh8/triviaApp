import { GET_PRESCRIPTION_LIST_REQUEST, GET_PRESCRIPTION_LIST_SUCCESS, GET_PRESCRIPTION_LIST_FAILED, ADD_QUOTE_SUCCESS, ADD_QUOTE_FAILED, ADD_QUOTE_REQUEST, MARK_ORDER_COMPLETE_SUCCESS, MARK_ORDER_COMPLETE_FAILED, MARK_ORDER_COMPLETE_REQUEST } from "../Types/Type";
import { put, call, takeEvery } from 'redux-saga/effects';
import Api from '../Api';

// ====================== GET PRESCRIPTION LIST SAGA ======================
export const getPrescriptionListSaga = function* getPrescriptionListSaga({ params }) {
    try {
        const response = yield call(Api.getPrescriptionList, params)
        yield put({ type: GET_PRESCRIPTION_LIST_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_PRESCRIPTION_LIST_FAILED, payload: e });
    }
}

// ====================== ADD QUOTE SAGA ======================
export const addQuoteSaga = function* addQuoteSaga({ params }) {
    try {
        const response = yield call(Api.addQuote, params)
        yield put({ type: ADD_QUOTE_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: ADD_QUOTE_FAILED, payload: e });
    }
}

// ====================== MARK ORDER COMPLETE SAGA ======================
export const markOrderCompleteSaga = function* markOrderCompleteSaga({ params }) {
    try {
        const response = yield call(Api.markOrderComplete, params)
        yield put({ type: MARK_ORDER_COMPLETE_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: MARK_ORDER_COMPLETE_FAILED, payload: e });
    }
}
export function* pharmacistSaga() {
    yield takeEvery(GET_PRESCRIPTION_LIST_REQUEST, getPrescriptionListSaga);
    yield takeEvery(ADD_QUOTE_REQUEST, addQuoteSaga);
    yield takeEvery(MARK_ORDER_COMPLETE_REQUEST, markOrderCompleteSaga);
}
export default pharmacistSaga;