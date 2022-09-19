import React from "react";

const component = (props) => {
    const isEver = props.number % 2 === 0;
    return (
        <>
        { isEver ? <div>Par</div> : <div>Ímpar</div> }
        </>
    );
};

export default component;