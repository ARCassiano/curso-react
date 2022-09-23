import axios from "axios";
import { toast } from "react-toastify";
import { showTabs, selectTab } from "../common/tab/tabActions";
const BASE_URL = "https://6329f347713d41bc8e67a74e.mockapi.io/api"
const INITIAL_VALUES = {credits: [{}], debts: [{}]};

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`);
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

async function submit(values, method){
    return async dispatch => {
        try {
            const id = values.id ? values.id : "" ;
            await axios[method](`${BASE_URL}/billing-cycles/${id}`, values);
            toast.success("Operação realizada com sucesso!");
            dispatch(init());
        } catch (error) {
            toast.success("Um erro interno aconteceu!");
        }
    }
}

export function remove(values) {
    return submit(values, "delete");
}

export function update(values) {
    return submit(values, "put");
}

export function create(values) {
    return submit(values, "post");
}

export function showUpdate(billingCycle) {
    return [
        showTabs("tabUpdate"),
        selectTab("tabUpdate"),
        select(billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs("tabDelete"),
        selectTab("tabDelete"),
        select(billingCycle)
    ]
}

export function init() {
    return [
        showTabs("tabList", "tabCreate"),
        selectTab("tabList"),
        getList(),
        select(INITIAL_VALUES)
    ]
}

export function select(billingCycle) {
    return {
        type: "BILLING_CYCLES_SELECTED",
        payload: billingCycle
    }
}

export function addItem(item, field){
    return {
        type: `BILLING_CYCLES_ADD_${field.toUpperCase()}`,
        payload: item
    };
}

export function removeItem(item, field){
    return {
        type: `BILLING_CYCLES_REMOVE_${field.toUpperCase()}`,
        payload: item
    };
}