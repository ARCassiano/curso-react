import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import BillingCyclesReducer from "../billingCycle/billingCyclesReducer";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesReducer,
    auth: authReducer
});

export default rootReducer;