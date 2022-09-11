import React from "react";

const familyMember = (props) => {
    return (
        <div>
            { props.name } <strong>{ props.lastName }</strong>
        </div>
    )
};

export default familyMember;