import React from "react";

const MenuTree = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link">
                <i className={`nav-icon fas fa-${props.icon}`}></i>
                <p>
                    {props.label}
                    <i className="nav-icon fas fa-angle-left right"></i>
                </p>
            </a>

            <ul className="nav nacv-treeview">
                {props.children}
            </ul>
        </li>
    );
}

export default MenuTree;