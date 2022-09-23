import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import Dashboard2 from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

const Component = (props) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard2" element={<Dashboard2 />} />
                <Route path="/billingCycles" element={<BillingCycle />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default Component;