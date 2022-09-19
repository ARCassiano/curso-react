import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

import { initialState, reducer } from "../../store";
import { numberAdd2, login  } from '../../store/actions';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [number, setNumber] = useState(2);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className='text'>{state.user.name}</span> : <span className="text">Sem usuário</span> }
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => login(dispatch, "Maria")}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'number/25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberX7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_parseInt'})}>Arredondar</button>

                    <span className="text">Adicionar: </span>
                    <input type="number" value={number} onChange={e => setNumber(+e.target.value)}  className="input" />
                    <button className="btn" onClick={() => dispatch({type: 'number_addN', payload: number })}>Adiconar</button>
                </div>    
            </div>
        </div>
    )
}

export default UseReducer
