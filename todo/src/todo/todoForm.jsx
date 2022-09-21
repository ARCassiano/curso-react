import { faClose, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { changeDescription, search, add, clear } from "./todoActions";


class Form extends Component{
    constructor(props){
        super(props);
        this.keyHandle = this.keyHandle.bind(this);
    }

    componentDidMount(){
        this.props.search();
    }

    keyHandle(e){
        const { add, search, description } = this.props;
        if(e.key === "Enter"){
            e.shiftKey ? search() : add(description);
        }else if(e.key === "Escape"){
            this.props.clear();
        }
    }

    render(){
        const { add, search, description } = this.props;

        return (
            <div role="form" className="todoForm row mt-3">
                <Grid cols="12 9 10">
                    <input value={this.props.description} onKeyUp={this.keyHandle} onChange={this.props.changeDescription} type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton icon={faPlus} style="primary" onClick={() => add(description)} />
                    <IconButton icon={faSearch} style="secondary" onClick={() => search()} />
                    <IconButton icon={faClose} style="default" onClick={this.props.clear} />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);