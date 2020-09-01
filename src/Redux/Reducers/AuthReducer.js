import { REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED, LOG_OUT_SUCCESS, LOG_OUT_FAILED, GET_LOGIN_SUCCESS, GET_LOGIN_FAILED, CUSTOMER_REGISTRATION_SUCCESS, CUSTOMER_REGISTRATION_FAILED, PHARMACIST_REGISTRATION_SUCCESS, PHARMACIST_REGISTRATION_FAILED, PHARMACY_USER_LOGIN_SUCCESS, PHARMACY_USER_LOGIN_FAILED, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILED, RESEND_OTP_SUCCESS, RESEND_OTP_FAILED, ADD_LOCATION_SUCCESS, ADD_LOCATION_FAILED, GET_LOCATION_SUCCESS, GET_LOCATION_FAILED, SET_LOCATION_SUCCESS, SET_LOCATION_FAILED, MANAGE_PROFILE_SUCCESS, MANAGE_PROFILE_FAILED, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, SET_LOCAL_LOCATION_SUCCESS, SET_LOCAL_LOCATION_FAILED, DELETE_LOCATION_SUCCESS, DELETE_LOCATION_FAILED } from "../Types/Type"

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REFRESH_TOKEN_SUCCESS:
            return { ...state, refreshTokenSuccess: true, refreshTokenResponse: action.payload }

        case REFRESH_TOKEN_FAILED:
            return { ...state, refreshTokenSuccess: false }

        case GET_LOGIN_SUCCESS:
            return { ...state, getLoginSuccess: true, getLoginResponse: action.payload, loginUser: action.payload, dataForLogin: action.dataForLogin }

        case GET_LOGIN_FAILED:
            return { ...state, getLoginSuccess: false }

        case CUSTOMER_REGISTRATION_SUCCESS:
            return { ...state, customerRegitrationSuccess: true, customerRegitrationResponse: action.payload, registrationResponse: action.payload, getLocationSuccess: false, getLocationResponse: [], dataForLogin: action.dataForLogin }

        case CUSTOMER_REGISTRATION_FAILED:
            return { ...state, customerRegitrationSuccess: false, getLocationSuccess: false, getLocationResponse: [] }

        case PHARMACIST_REGISTRATION_SUCCESS:
            return { ...state, pharmacistRegitrationSuccess: true, pharmacistRegitrationResponse: action.payload, registrationResponse: action.payload, dataForLogin: action.dataForLogin }

        case PHARMACIST_REGISTRATION_FAILED:
            return { ...state, pharmacistRegitrationSuccess: false }

        case PHARMACY_USER_LOGIN_SUCCESS:
            return { ...state, pharamacyUserLoginSuccess: true, pharamacyUserLoginResponse: action.payload, loginUser: action.payload, isPharmacyUser: true }

        case PHARMACY_USER_LOGIN_FAILED:
            return { ...state, pharamacyUserLoginSuccess: false }

        case VERIFY_OTP_SUCCESS:
            return { ...state, verifyOtpSuccess: true, verifyOtpResponse: action.payload }

        case VERIFY_OTP_FAILED:
            return { ...state, verifyOtpSuccess: false }

        case RESEND_OTP_SUCCESS:
            return { ...state, resendOtpSuccess: true, resendOtpResponse: action.payload }

        case RESEND_OTP_FAILED:
            return { ...state, resendOtpSuccess: false }

        case ADD_LOCATION_SUCCESS:
            return { ...state, addLocationSuccess: true, addLocationResponse: action.payload }

        case ADD_LOCATION_FAILED:
            return { ...state, addLocationSuccess: false }

        case GET_LOCATION_SUCCESS:
            return { ...state, getLocationSuccess: true, getLocationResponse: action.payload }

        case GET_LOCATION_FAILED:
            return { ...state, getLocationSuccess: false }

        case SET_LOCATION_SUCCESS:
            return { ...state, setLocationSuccess: true, setLocationResponse: action.payload }

        case SET_LOCATION_FAILED:
            return { ...state, setLocationSuccess: false }

        case DELETE_LOCATION_SUCCESS:
            return { ...state, deleteLocationSuccess: true, deleteLocationResponse: action.payload }

        case DELETE_LOCATION_FAILED:
            return { ...state, deleteLocationSuccess: false }

        case SET_LOCAL_LOCATION_SUCCESS:
            return { ...state, setLocalLocationSuccess: true, setLocalLocationResponse: action.payload }

        case SET_LOCAL_LOCATION_FAILED:
            return { ...state, setLocalLocationSuccess: false }

        case CHANGE_PASSWORD_SUCCESS:
            return { ...state, changePasswordSuccess: true, changePasswordResponse: action.payload }

        case CHANGE_PASSWORD_FAILED:
            return { ...state, changePasswordSuccess: false }

        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, forgotPasswordSuccess: true, forgotPasswordResponse: action.payload }

        case FORGOT_PASSWORD_FAILED:
            return { ...state, forgotPasswordSuccess: false }

        case MANAGE_PROFILE_SUCCESS:
            if (action.payload.status == 1) {
                return { ...state, manageProfileSuccess: true, manageProfileResponse: action.payload, loginUser: action.payload }
            } else {
                return { ...state, manageProfileSuccess: true, manageProfileResponse: action.payload }
            }

        case MANAGE_PROFILE_FAILED:
            return { ...state, manageProfileSuccess: false }

        case LOG_OUT_SUCCESS:
            return {}

        case LOG_OUT_FAILED:
            return {}

        default:
            return state;
    }
}