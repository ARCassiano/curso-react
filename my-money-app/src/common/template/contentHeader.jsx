import React from "react";

const ContentHeader = (props) => {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <h1>
                    {props.title}
                    <small> {props.small}</small>
                </h1>
            </div>
        </section>
    );
}

export default ContentHeader;