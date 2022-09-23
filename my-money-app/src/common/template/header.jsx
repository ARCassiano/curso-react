import React from "react";
import Navbar from "./navbar";

export default function Header(props){
    return (
        <nav className="main-header navbar navbar-expand navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a  className="nav-link" data-widget="pushmenu" role="button">
                        <i className="fas fa-bars"></i>    
                    </a>    
                </li>
            </ul>
            <Navbar />
            {/* <a href="/#/" className="logo">
                <span className="logo-mini"><b>My</b>M</span>
                <span className="logo-lg">
                    <i className="fa fa-money"></i>
                    <b>My</b> Money
                </span>
            </a>
            <nav className="navbar navbar-static-top">
                
            </nav> */}
        </nav>
    );
}