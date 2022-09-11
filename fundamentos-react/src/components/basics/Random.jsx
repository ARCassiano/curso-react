import React from "react";

const random = (props) => {
    return <div>{ Math.random(props.min, props.max) }</div>
};

export  default random;