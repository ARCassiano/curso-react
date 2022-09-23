import React from "react";

const Content = (props) => {
    return (
        <section className="content">
            <div className="container-fluid">
                {props.children}
            </div>
        </section>
    );
}

export default Content;