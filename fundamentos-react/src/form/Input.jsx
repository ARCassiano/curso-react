import React, { useState } from "react";

const Component = () => {
    const [value, setValue] = useState("Valor incial");
    return (
        <>
            <p>{value}</p>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <input value={value} readOnly />
            <input value={undefined} />
        </>
    );
};

export default Component;