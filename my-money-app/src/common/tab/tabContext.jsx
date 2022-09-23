import React, { Component } from "react";
import If from "../layout/if";
import { connect } from "react-redux";

class TabContent extends Component {

    render() {
        const active = this.props.tab.selected == this.props.id;
        const visible = this.props.tab.visible[this.props.id];

        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${active ? "active" : ""}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab });
export default connect(mapStateToProps)(TabContent);