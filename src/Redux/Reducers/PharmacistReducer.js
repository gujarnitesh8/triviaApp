import { GET_PRESCRIPTION_LIST_SUCCESS, GET_PRESCRIPTION_LIST_FAILED, ADD_QUOTE_SUCCESS, ADD_QUOTE_FAILED, MARK_ORDER_COMPLETE_SUCCESS, MARK_ORDER_COMPLETE_FAILED } from "../Types/Type"

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_PRESCRIPTION_LIST_SUCCESS:
            return { ...state, getPrescriptionRequestListSuccess: true, getPrescriptionRequestListResponse: action.payload }

        case GET_PRESCRIPTION_LIST_FAILED:
            return { ...state, getPrescriptionRequestListSuccess: false, getPrescriptionRequestListResponse: action.payload }

        case ADD_QUOTE_SUCCESS:
            return { ...state, addQuoteSuccess: true, addQuoteResponse: action.payload }

        case ADD_QUOTE_FAILED:
            return { ...state, addQuoteSuccess: false, addQuoteResponse: action.payload }

        case MARK_ORDER_COMPLETE_SUCCESS:
            return { ...state, markOrderCompleteSuccess: true, markOrderCompleteResponse: action.payload }

        case MARK_ORDER_COMPLETE_FAILED:
            return { ...state, markOrderCompleteSuccess: false, markOrderCompleteResponse: action.payload }

        default:
            return state;
    }
}