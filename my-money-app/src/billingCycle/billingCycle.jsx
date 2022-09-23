import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { create, update, remove, init } from "./billingCyclesActions";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabsContent";
import Row from "../common/layout/row";
import TabContext from "../common/tab/tabContext";
import BillingCycleList from "./billingCycleList";
import BillingCycleForm from "./billingCycleForm";

class BillingCycles extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContext id="tabList">
                                <BillingCycleList />
                            </TabContext>
                            <TabContext id="tabCreate">
                                <BillingCycleForm onSubmit={this.props.create} submit={{ label: "Incluir", class: "primary" }} />
                            </TabContext>
                            <TabContext id="tabUpdate">
                                <BillingCycleForm onSubmit={this.props.update} submit={{ label: "Alterar", class: "info" }} />
                            </TabContext>
                            <TabContext id="tabDelete">
                                <BillingCycleForm onSubmit={this.props.remove} readOnly submit={{ label: "Excluir", class: "danger" }} />
                            </TabContext>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycles);