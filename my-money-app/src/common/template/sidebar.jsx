import React from "react";
import Menu from "./menu";

const SideBar = (props) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" className="brand-link">
                <i className="fas fa-money-bill-alt"></i>
                <span className="brand-text font-wright-light">
                    <b>My</b> Money
                </span>
            </a>

            <div className="sidebar">
                <Menu />
            </div>
        </aside>
    );
}

export default SideBar;