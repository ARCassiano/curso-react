import React from "react";
import If, { Else } from "../components/basics/If";

const component = (props) => {
    const user = props.user || {};
    return (
        <>
            <If expression={!!props?.user?.name}>
                <div>Seja bem vindo <strong>{user.name}</strong></div>
                <Else>
                    <div>Seja bem vindo!</div>
                </Else>
            </If>
        </>
    );
};

export default component;