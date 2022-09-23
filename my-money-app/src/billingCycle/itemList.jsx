import React, { Component } from "react";
import Grid from "../common/layout/grid";
import { Field } from 'react-final-form'
import Input from "../common/form/input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem as add, removeItem as remove } from "./billingCyclesActions";
import If from "../common/layout/if";

class ItemList extends Component {

    constructor(props) {
        super(props);
    }

    add(item = {}) {
        if (this.props.readOnly) {
            return;
        }

        this.props.add(item, this.props.field);
    }

    remove(item) {
        if (this.props.readOnly || this.props.items.length <= 1) {
            return;
        }

        this.props.remove(item, this.props.field);
    }

    renderRows() {
        const list = this.props.items || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} placeholder="Informe o nome" readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} placeholder="Informe o valor" readOnly={this.props.readOnly} /></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`} component={Input} placeholder="Informe o status" readOnly={this.props.readOnly} /></td>
                </If>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => this.add()}>
                        <i className="fas fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => this.add(item)}>
                        <i className="fas fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.remove(item)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Valor</th>
                                </If>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ add, remove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);