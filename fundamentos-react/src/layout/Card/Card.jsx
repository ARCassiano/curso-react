import React from "react";
import "./Card.css";

const card = (props) => {
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00"
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-title">{ props.title }</div>
            <div className="card-content">
                { props.children }
            </div>
        </div>
    );
};

export default card;