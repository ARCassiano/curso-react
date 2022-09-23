import React from "react";

const MenuItem = (props) => {
    return (
        <li className="nav-item">
            <a href={props.path} className="nav-link">
                <i className={`nav-icon fas fa-${props.icon}`}></i>
                <p>
                    {props.label}
                </p>
            </a>
        </li>
    );
}

export default MenuItem;