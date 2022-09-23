import React, { Component } from "react";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widgets/valueBox";
import Row from "../common/layout/row";
import axios from "axios";

const BASE_URL = "https://6329f347713d41bc8e67a74e.mockapi.io/api"
export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {summary: { credit: 0, debit: 0}};
    }

    async componentDidMount(){
        const response = await axios.get(`${BASE_URL}/billing-cycles-summary`);
        this.setState(response.data);
    }

    render() {
        const { credit, debt } = this.state.summary;

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="piggy-bank" value={`R$ ${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money-bill-wave" value={`R$ ${credit - debt}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        );
    }
}