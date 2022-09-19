import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Param from "./views/Param";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/param/1">Param #1</Link>
                        </li>
                        <li>
                            <Link to="/param/2">Param #2</Link>
                        </li>
                        <li>
                            <Link to="/invalid">Link Inválido</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/param/:id" element={<Param />} />
                    <Route path="*" element={<NotFound />} />    
                </Routes>
            </div>
        </Router>
    );
}

export default App;