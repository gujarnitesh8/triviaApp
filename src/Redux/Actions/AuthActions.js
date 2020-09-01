import { REFRESH_TOKEN_REQUEST, GET_LOGIN_REQUEST, CUSTOMER_REGISTRATION_REQUEST, PHARMACIST_REGISTRATION_REQUEST, PHARMACY_USER_LOGIN_REQUEST, LOG_OUT_REQUEST, VERIFY_OTP_REQUEST, RESEND_OTP_REQUEST, ADD_LOCATION_REQUEST, GET_LOCATION_REQUEST, SET_LOCATION_REQUEST, MANAGE_PROFILE_REQUEST, CHANGE_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST, SET_LOCAL_LOCATION_REQUEST, DELETE_LOCATION_REQUEST } from "../Types/Type";

// ================= REFRESH TOKEN =================
export const refreshTokenRequest = (params) => {
    return {
        type: REFRESH_TOKEN_REQUEST,
        params
    };
}


// ================= GET LOGIN =================
export const getLoginRequest = (params) => {
    return {
        type: GET_LOGIN_REQUEST,
        params
    };
}

// ================= LOGOUT =================
export const logOutRequest = (params) => {
    return {
        type: LOG_OUT_REQUEST,
        params
    };
}

// ================= CUSTOMER REGISTRATION =================
export const customerRegistrationRequest = (params) => {
    return {
        type: CUSTOMER_REGISTRATION_REQUEST,
        params
    };
}

// ================= PHARMACIST REGISTRATION =================
export const pharmacistRegistrationRequest = (params) => {
    return {
        type: PHARMACIST_REGISTRATION_REQUEST,
        params
    };
}

// ================= GET PHARMACY USER LOGIN =================
export const getPharmacyUserLoginRequest = (params) => {
    return {
        type: PHARMACY_USER_LOGIN_REQUEST,
        params
    };
}

// ================= VERIFY OTP =================
export const verifyOtpRequest = (params) => {
    return {
        type: VERIFY_OTP_REQUEST,
        params
    };
}

// ================= RESEND OTP =================
export const resendOtpRequest = (params) => {
    return {
        type: RESEND_OTP_REQUEST,
        params
    };
}
// ================= ADD LOCATION =================
export const addLocationRequest = (params) => {
    return {
        type: ADD_LOCATION_REQUEST,
        params
    };
}

// ================= GET LOCATION =================
export const getLocationRequest = (params) => {
    return {
        type: GET_LOCATION_REQUEST,
        params
    };
}

// ================= SET LOCATION =================
export const setLocationRequest = (params) => {
    return {
        type: SET_LOCATION_REQUEST,
        params
    };
}

// ================= DELETE LOCATION =================
export const deleteLocationRequest = (params) => {
    return {
        type: DELETE_LOCATION_REQUEST,
        params
    };
}

// ================= SET LOCAL LOCATION =================
export const setLocalLocationRequest = (params) => {
    return {
        type: SET_LOCAL_LOCATION_REQUEST,
        params
    };
}

// ================= MANAGE PROFILE =================
export const manageProfileRequest = (params) => {
    return {
        type: MANAGE_PROFILE_REQUEST,
        params
    };
}

// ================= CHANGE PASSWORD =================
export const changePasswordRequest = (params) => {
    return {
        type: CHANGE_PASSWORD_REQUEST,
        params
    };
}
// ================= FORGOT PASSWORD =================
export const forgotPasswordRequest = (params) => {
    return {
        type: FORGOT_PASSWORD_REQUEST,
        params
    };
}