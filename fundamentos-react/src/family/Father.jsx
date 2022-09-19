import React, { useState } from "react";
import Son from "./Son";

const Component = () => {
    let [name, setName] = useState("?");
    let [age, setAge] = useState(0);
    let [isNerd, setIsNerd] = useState(false);

    function setData(nameParam, ageParam, isNerdParam){
        console.log(nameParam, ageParam, isNerdParam);
        setName(nameParam);
        setAge(ageParam);
        setIsNerd(isNerdParam);
    }

    return (
        <div>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>É nerd? {isNerd ? "Sim" : "Não" }</p>
            <fieldset>
                <legend>Filhos</legend>
                <Son name="Hanaísa" age={29} isNerd={true} action={setData} />
                <Son name="Giovana" age={20} isNerd={false} action={setData} />
                <Son name="Anderson" age={26} isNerd={true} action={setData} />
            </fieldset>
        </div>
    );
};
export default Component;