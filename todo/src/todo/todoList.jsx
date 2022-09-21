import { faCheck, faTrash, faUndo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import React from "react";
import IconButton from "../template/iconButton";

import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoActions";

const List = (props) => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? "text-decoration-line-through text-secondary" : ""}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon={faCheck} onClick={() => props.markAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="warning" icon={faUndo} onClick={() => props.markAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" icon={faTrash} onClick={() => props.remove(todo)} hide={!todo.done}></IconButton>
                </td>
            </tr>
        ));
    }

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="col-md-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);