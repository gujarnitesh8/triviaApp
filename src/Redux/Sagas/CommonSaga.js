import { GET_NETWORK_INFO_REQUEST, GET_NETWORK_INFO_SUCCESS, GET_NETWORK_INFO_FAILED, UPDATE_LANGUAGE_REQUEST, UPDATE_LANGUAGE_SUCCESS, UPDATE_LANGUAGE_FAILED } from "../Types/Type";
import { put, call, takeEvery } from 'redux-saga/effects';
// import Api from '../../Services/Api';
// ====================== NETWORK UPDATE ======================
export const getNetWorkSaga = function* getNetWorkSaga({ params }) {
    try {
        yield put({ type: GET_NETWORK_INFO_SUCCESS, payload: params });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_NETWORK_INFO_FAILED, payload: e });
    }
}

// ====================== UPDATE LANGUAGE ======================
export const updateLanguageSaga = function* updateLanguageSaga({ params }) {
    try {
        yield put({ type: UPDATE_LANGUAGE_SUCCESS, payload: params });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: UPDATE_LANGUAGE_FAILED, payload: e });
    }
}

export function* commonSaga() {
    yield takeEvery(GET_NETWORK_INFO_REQUEST, getNetWorkSaga);
    yield takeEvery(UPDATE_LANGUAGE_REQUEST, updateLanguageSaga);
}
export default commonSaga;