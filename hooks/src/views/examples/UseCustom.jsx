import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const {inc, dec, count} = useCounter();
    
    const response = useFetch("http://files.cod3r.com.br/curso-react/estados.json");
    function showState(states){
        return states.map(s => <li key={s.sigla}>{s.sigla} - {s.nome}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>            

                <div>
                    <button className="btn" onClick={() => dec()}>-1</button>
                    <button className="btn" onClick={() => inc()}>+1</button>
                </div>
            </div>


            <SectionTitle title="Exercício #02" />
            <div className="center">
                <h2>Estados</h2>
                <ul>
                    {response.data ? showState(response.data) : ""}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
