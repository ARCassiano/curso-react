import React, { Component } from "react";
import { getList, showUpdate, showDelete } from "./billingCyclesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BillingCycleList extends Component {
    
    componentDidMount() {
        this.props.getList();
    }

    renderRows(){
        const list = this.props.list || [];
        const rows = list.map(item => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(item)}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(item)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));

        return rows;
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="col-md-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);