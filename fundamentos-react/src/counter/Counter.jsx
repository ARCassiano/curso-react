import React, { Component } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Display from "./Display";

export default class Counter extends Component
{

    state = {
        number: this.props.beginNumber || 0,
        step:  this.props.step || 1
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        });
    };

    setStep = (value) =>{
        this.setState({
            step: value
        });
    }

    render(){
        return (
            <>
                <h2>Contador</h2>
                <Display number={this.state.number}/>
                <Form step={this.state.step} setStep={this.setStep} />
                <Buttons inc={this.inc} dec={this.dec} />
            </>
        );
    }
}