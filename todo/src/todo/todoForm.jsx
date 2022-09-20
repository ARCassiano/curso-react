import { faClose, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const Form = (props) => {
    const keyHandle = (e) => {
        if(e.key === "Enter"){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(e.key === "Escape"){
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm row mt-3">
            <Grid cols="12 9 10">
                <input value={props.description} onKeyUp={keyHandle} onChange={props.handleChange} type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton icon={faPlus} style="primary" onClick={props.handleAdd} />
                <IconButton icon={faSearch} style="secondary" onClick={props.handleSearch} />
                <IconButton icon={faClose} style="default" onClick={props.handleClear} />
            </Grid>
        </div>
    );
};

export default Form;