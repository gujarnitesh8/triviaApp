import { GET_PHARMACIES_SUCCESS, GET_PHARMACIES_FAILED, CREATE_PRESCRIPTION_SUCCESS, CREATE_PRESCRIPTION_FAILED, GET_PRESCRIPTION_SUCCESS, GET_PRESCRIPTION_FAILED, GET_PRESCRIPTION_DETAILS_SUCCESS, GET_PRESCRIPTION_DETAILS_FAILED, DELETE_PRESCRIPTION_SUCCESS, DELETE_PRESCRIPTION_FAILED, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_FAILED } from "../Types/Type"

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_PHARMACIES_SUCCESS:
            return { ...state, getPharmaciesSuccess: true, getPharmaciesResponse: action.payload }

        case GET_PHARMACIES_FAILED:
            return { ...state, getPharmaciesSuccess: false, getPharmaciesResponse: action.payload }

        case CREATE_PRESCRIPTION_SUCCESS:
            return { ...state, createPrescriptionSuccess: true, createPrescriptionResponse: action.payload }

        case CREATE_PRESCRIPTION_FAILED:
            return { ...state, createPrescriptionSuccess: false, createPrescriptionResponse: action.payload }

        case GET_PRESCRIPTION_SUCCESS:
            return { ...state, getPrescriptionListSuccess: true, getPrescriptionListResponse: action.payload }

        case GET_PRESCRIPTION_FAILED:
            return { ...state, getPrescriptionListSuccess: false, getPrescriptionListResponse: action.payload }

        case GET_PRESCRIPTION_DETAILS_SUCCESS:
            return { ...state, getPrescriptionDetailsSuccess: true, getPrescriptionDetailsResponse: action.payload }

        case GET_PRESCRIPTION_DETAILS_FAILED:
            return { ...state, getPrescriptionDetailsSuccess: false, getPrescriptionDetailsResponse: action.payload }

        case DELETE_PRESCRIPTION_SUCCESS:
            return { ...state, deletePrescriptionSuccess: true, deletePrescriptionResponse: action.payload }

        case DELETE_PRESCRIPTION_FAILED:
            return { ...state, deletePrescriptionSuccess: false, deletePrescriptionResponse: action.payload }

        case SUBMIT_ORDER_SUCCESS:
            return { ...state, submitOrderSuccess: true, submitOrderResponse: action.payload }

        case SUBMIT_ORDER_FAILED:
            return { ...state, submitOrderSuccess: false, submitOrderResponse: action.payload }

        default:
            return state;
    }
}