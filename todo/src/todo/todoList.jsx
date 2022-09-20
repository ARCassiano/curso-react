import { faCheck, faTrash, faUndo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconButton from "../template/iconButton";

const List = (props) => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? "text-decoration-line-through text-secondary" : ""}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon={faCheck} onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="warning" icon={faUndo} onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" icon={faTrash} onClick={() => props.handleRemove(todo)} hide={!todo.done}></IconButton>
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

export default List;