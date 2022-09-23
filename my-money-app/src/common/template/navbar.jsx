import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../auth/authActions";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    changeOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        //TODO
        const { name, email } = this.props.user || {};
        return (
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        );
    }
}


const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);