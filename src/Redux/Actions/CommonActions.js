import { GET_NETWORK_INFO_REQUEST, UPDATE_LANGUAGE_REQUEST } from "../Types/Type";

// ================= UPDATE NETWORK =================
export const updateNetwork = (params) => {
    return {
        type: GET_NETWORK_INFO_REQUEST,
        params
    };
}

// ================= UPDATE LANGUAGE =================
export const updateLanguage = (params) => {
    return {
        type: UPDATE_LANGUAGE_REQUEST,
        params
    };
}