import React, { Component } from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widgets/valueBox";

export default ({ credit, debt }) => (
    <Grid cols="12 12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols="12 4" color="green" icon="piggy-bank" value={`R$ ${credit}`} text="Total de Créditos" />
                <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos" />
                <ValueBox cols="12 4" color="blue" icon="money-bill-wave" value={`R$ ${credit - debt}`} text="Valor Consolidado" />
            </Row>
        </fieldset>
    </Grid>
)