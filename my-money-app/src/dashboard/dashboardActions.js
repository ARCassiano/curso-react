import axios from "axios";
const BASE_URL = "https://6329f347713d41bc8e67a74e.mockapi.io/api"

export function getSummary(){
    const request = axios.get(`${BASE_URL}/billing-cycles-summary`);
    return {
        type: "BILLING_SUMMARY_FETCHED",
        payload: request
    };
}