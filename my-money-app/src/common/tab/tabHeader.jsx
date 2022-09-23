import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTab } from "./tabActions";
import If from "../layout/if";

class TabHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const active = this.props.tab.selected == this.props.target;
        const visible = this.props.tab.visible[this.props.target];
        return (
            <If test={visible}>
                <li className="nav-item">
                    <a className={`nav-link ${active ? "active" : ""}`}
                        data-toggle="tab"
                        data-target={this.props.target}
                        onClick={() => this.props.selectTab(this.props.target)}>

                        <i className={`fas fa-${this.props.icon}`}></i>
                        {this.props.label}
                    </a>
                </li>
            </If>
        );
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);