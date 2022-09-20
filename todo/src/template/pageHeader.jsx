import React from "react";

const PageHeader = (props) => {
    return (
        <header className="page-header">
            <h2>{props.name} <small className="text-muted">{props.small}</small></h2>
        </header>
    );
};

export default PageHeader;