import reducer from "./reducers"
import { numberAdd2 } from "./actions"
const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
};

export {
    reducer,
    initialState,
    numberAdd2
}