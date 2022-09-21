import React from "react";  

import PageHeader from "../template/pageHeader";
import Form from "./todoForm";
import List from "./todoList";

const Todo = () => {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <Form />
            <List />
        </div>
    );
}

export default Todo;