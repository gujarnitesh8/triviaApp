import { GET_PRESCRIPTION_LIST_REQUEST, ADD_QUOTE_REQUEST, MARK_ORDER_COMPLETE_REQUEST } from "../Types/Type";


// ================= GET PRESCRIPTION LIST =================
export const getPrescriptionListRequest = (params) => {
    return {
        type: GET_PRESCRIPTION_LIST_REQUEST,
        params
    };
}


// ================= ADD QUOTE =================
export const addQuoteRequest = (params) => {
    return {
        type: ADD_QUOTE_REQUEST,
        params
    };
}

// ================= MARK ORDER COMPLETE =================
export const markOrderCompleteRequest = (params) => {
    return {
        type: MARK_ORDER_COMPLETE_REQUEST,
        params
    };
}
