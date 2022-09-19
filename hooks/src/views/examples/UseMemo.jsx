import React, { useState } from 'react'
import { useMemo } from 'react';
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b){
    const future = Date.now() + 2000;
    while(Date.now() < future) {}
    return a + b;
}

const UseMemo = (props) => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    const result = useMemo(() => sum(number1, number2), [number1, number2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input" value={number1} onChange={e => setNumber1(+e.target.value)} />
                <input type="number" className="input" value={number2} onChange={e => setNumber2(+e.target.value)} />
                <input type="number" className="input" value={number3} onChange={e => setNumber3(+e.target.value)} />
                <div className="text red">{result}</div>
            </div>
        </div>
    )
}

export default UseMemo
