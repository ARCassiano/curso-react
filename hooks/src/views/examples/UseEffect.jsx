import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(number){
    const n = parseInt(number);
    if(n < 0) return -1;
    if(n === 0) return 1;

    return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [number2, setNumber2] = useState(0);
    const [label, setLabel] = useState("-");

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number]);
    useEffect(function(){
        setLabel(number2 % 2 === 0 ? "Par" : "Ímpar");
    }, [number2]);
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text red">{label}</span>
                <input type="number" className="input" value={number2} onChange={e => setNumber2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
