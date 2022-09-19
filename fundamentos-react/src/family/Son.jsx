import React from "react";

const component = (props) => {
    let { name, age, isNerd, action } = props;

    return (
        <div>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>É nerd? {isNerd ? "Sim" : "Não" }</p>
            <button onClick={_ => action("João", 53, false)}>Enviar dados para o pai</button>
        </div>
    );
};

export default component;