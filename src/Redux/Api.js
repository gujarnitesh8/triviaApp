import { SERVER_URI } from "../CommonConfig";
import { Platform } from "react-native";


module.exports = {

    // =======>>>>>>>>>> REFRESH TOKEN <<<<<<<<<<=======
    refreshToken(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'RefreshToken'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                "Content-Type": "application/json",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    getLogin(params) {
        let headers = params.headers;
        let body = params.body;
        console.log(body, '=body=', headers)
        return fetch(`${SERVER_URI + 'customer_login'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": 'multipart/form-data',
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    customerRegistrationApi(params) {
        let headers = params.headers;
        let body = params.body;
        console.log(body, '=body=', headers)
        return fetch(`${SERVER_URI + 'customer_register'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    pharmacistRegistrationApi(params) {
        let headers = params.headers;
        let body = params.body;
        console.log(body, '=body=', headers)
        return fetch(`${SERVER_URI + 'pharmacist_register'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    pharmacyUserLoginApi(params) {
        let headers = params.headers;
        let body = params.body;
        console.log(body, '=body=', headers)
        return fetch(`${SERVER_URI + 'pharmacy_login'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    verifyOtpApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'verify_otp'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    resendOtpApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'resend_otp'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    addLocationApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'add_location'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    getLocationApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'get_locations'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    setLocationApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'set_location'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    deleteLocationApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'delete_location'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    
    manageProfileApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'manage_customer_profile'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    ///=========  APIs FOR CUSTOMER  ==========
    getPharmacies(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'get_pharmacies_list'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    createPrescription(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'create_prescription'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    getPrescriptionsList(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'get_prescription_list'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    getPrescriptionsDetails(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'get_prescription_details'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    deletePrescription(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'delete_prescription'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    getPrescriptionList(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'get_prescription_request_list'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    addQuote(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'add_quote'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    changePasswordApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'change_password'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },
    forgotPasswordApi(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'forgot_password'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    submitOrder(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'submit_order'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

    markOrderComplete(params) {
        let headers = params.headers;
        let body = params.body;
        return fetch(`${SERVER_URI + 'mark_order_complete'}`, {
            method: 'POST',
            headers: new Headers({
                accesskey: headers.accesskey,
                secretkey: headers.secretkey,
                deviceToken: headers.deviceToken,
                deviceType: headers.deviceType,
                "Content-Type": "multipart/form-data",
                "User-Agent": Platform.OS == 'Android' ? 'Android' : 'iOS',
            }),
            body: body
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    },

}
