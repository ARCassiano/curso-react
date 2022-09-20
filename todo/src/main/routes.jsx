import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";
import Menu from "../template/menu";

const Component = (props) => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/todos" element={<Todo />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/todos" replace />} />
            </Routes>
        </Router>
    );
};

export default Component;