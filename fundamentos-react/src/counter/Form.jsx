import React from "react";

const component = props => {
    return (
        <div>
            <input type="number" value={props.step} onChange={e => props.setStep(+e.target.value)} />
        </div>
    )
};
export default component;