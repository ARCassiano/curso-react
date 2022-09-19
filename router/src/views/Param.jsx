import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
    const { id } = useParams();
    return (
        <h1>Parâmetro: {id}</h1>
    );
}

export default Param;