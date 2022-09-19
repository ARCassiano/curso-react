import React from "react";

const component = props => {
    return (
        <div>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </div>
    )
};
export default component;