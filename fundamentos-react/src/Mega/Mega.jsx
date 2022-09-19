import React from "react";
import { Component } from "react";

export default class Mega extends Component{
    state = {
        length: 7,
        numbers: []
    };

    generateNumbers = () => {
        debugger;
        const numbers = Array.from({length: this.state.length}, (_, i) => Math.floor(Math.random() * 100));
        this.setState({
            numbers: numbers
        }) 
    };
    
    setLength = (e) =>{
        this.setState({
            length: +e.target.value
        });
    }

    render(){
        return (
            <div>
                <p>
                {this.state.numbers.length ? this.state.numbers.map(x => x + " - ") : "-"  }
                </p>
                Quantidade de números: <input type="number" value={this.state.length} onChange={this.setState} />
                <button onClick={this.generateNumbers}>Gerar</button>
            </div>
        );
    }
}