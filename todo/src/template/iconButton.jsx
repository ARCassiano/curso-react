import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import If from "../template/if";

const IconButton = (props) => {
    return (
        <If test={!props.hide}>
            <button className={"btn me-2 btn-" + props.style} onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} /> 
            </button>
        </If>
    );
};

export default IconButton;