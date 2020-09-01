import { GET_PHARMACIES_REQUEST, CREATE_PRESCRIPTION_REQUEST, GET_PRESCRIPTION_REQUEST, GET_PRESCRIPTION_DETAILS_REQUEST, DELETE_PRESCRIPTION_REQUEST, SUBMIT_ORDER_REQUEST } from "../Types/Type";


// ================= GET PHARMACIES LIST =================
export const getPharmaciesListRequest = (params) => {
    return {
        type: GET_PHARMACIES_REQUEST,
        params
    };
}

// ================= CREATE PRESCRIPTION =================
export const createPrescriptionRequest = (params) => {
    return {
        type: CREATE_PRESCRIPTION_REQUEST,
        params
    };
}


// ================= GET PRESCRIPTION LIST =================
export const getPrescriptionsListRequest = (params) => {
    return {
        type: GET_PRESCRIPTION_REQUEST,
        params
    };
}

// ================= GET PRESCRIPTION DETAILS =================
export const getPrescriptionsDetailsRequest = (params) => {
    return {
        type: GET_PRESCRIPTION_DETAILS_REQUEST,
        params
    };
}

// ================= DELETE PRESCRIPTION =================
export const deletePrescriptionsDetailsRequest = (params) => {
    return {
        type: DELETE_PRESCRIPTION_REQUEST,
        params
    };
}

// ================= SUBMIT ORDER =================
export const submitOrderRequest = (params) => {
    return {
        type: SUBMIT_ORDER_REQUEST,
        params
    };
}
