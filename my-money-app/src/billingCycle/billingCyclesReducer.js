const INITIAL_STATE = { lis: [], selected: null }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "BILLING_CYCLES_FETCHED":
            return { ...state, list: action.payload.data };
        case "BILLING_CYCLES_SELECTED":
            return { ...state, selected: action.payload };
        case "BILLING_CYCLES_ADD_CREDITS":
            return { ...state, selected: { ...state.selected, credits: [...state.selected.credits, action.payload] } };
        case "BILLING_CYCLES_ADD_DEBTS":
            return { ...state, selected: { ...state.selected, debts: [...state.selected.debts, action.payload] } };
        case "BILLING_CYCLES_REMOVE_CREDITS":
            return { ...state, selected: { ...state.selected, credits: [...state.selected.credits.filter(x => x != action.payload)] } };
        case "BILLING_CYCLES_REMOVE_DEBTS":
            return { ...state, selected: { ...state.selected, debts: [...state.selected.debts.filter(x => x != action.payload)] } };
        default:
            return state;
    }
}