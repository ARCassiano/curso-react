import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
import LabelAndInput from '../common/form/labelAndInput';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCyclesActions";
import ItemList from "./itemList";
import Summary from './summary';
import Row from '../common/layout/row';

class BillingCycleForm extends Component {

    constructor(props) {
        super(props);

    }

    calculateSummary() {
        const sum = (t, v) => t + v;
        const credits = this.props?.selected?.credits || [];
        const debts = this.props?.selected?.debts || [];
        return {
            sumOfCredits: credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }

    form(handleSubmit) {
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();
        return (
            <form onSubmit={handleSubmit} role="form">
                <div className="container">
                    <Row>
                        <Field name="name"
                            component={LabelAndInput}
                            label="Nome"
                            cols="12 4"
                            placeholder="Informe o nome"
                            readOnly={this.props.readOnly} />
                        <Field name="month"
                            component={LabelAndInput}
                            label="Mês"
                            cols="12 4"
                            placeholder="Informe o mês"
                            readOnly={this.props.readOnly} />
                        <Field name="year"
                            component={LabelAndInput}
                            label="Ano"
                            cols="12 4"
                            placeholder="Informe o ano"
                            readOnly={this.props.readOnly} />
                    </Row>
                    <Row>
                        <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    </Row>
                    <Row>
                        <ItemList cols="12 6" field="credits" legend="Créditos" readOnly={this.props.readOnly} items={this.props.selected.credits} />
                        <ItemList cols="12 6" field="debts" legend="Débitos" showStatus readOnly={this.props.readOnly} items={this.props.selected.debts} />
                    </Row>
                </div>
                <div className="form-row">
                    <button className={`btn btn-${this.props.submit.class}`} type="submit">
                        {this.props.submit.label}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }

    render() {
        return (
            <Form
                onSubmit={this.props.onSubmit}
                initialValues={{ ...this.props.selected }}
                validate={this.validate}
                render={({ handleSubmit }) => this.form(handleSubmit)}
            />
        );
    }
}

const mapStateToProps = state => ({ selected: state.billingCycle.selected });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);