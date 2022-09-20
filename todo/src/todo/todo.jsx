import React, { Component } from "react";  
import axios from "axios";

import PageHeader from "../template/pageHeader";
import Form from "./todoForm";
import List from "./todoList";

const URL = "https://6329f347713d41bc8e67a74e.mockapi.io/api/todos";
export default class Todo extends Component{

    constructor(props){
        super(props);
        this.state = { description: "", list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh()
    }

    async handleClear(){
        this.setState({
            ...this.state,
            description: ""
        });
        this.refresh();
    }

    async handleMarkAsPending(todo){
        await axios.put(`${URL}/${todo.id}`, { ...todo, done: false });
        await this.refresh(todo.description);
    }

    async handleMarkAsDone(todo){
        await axios.put(`${URL}/${todo.id}`, { ...todo, done: true });
        await this.refresh(todo.description);
    }

    async handleRemove(todo){
        await axios.delete(`${URL}/${todo.id}`);
        await this.refresh(todo.description);
    }

    async refresh(description = ""){
        const search = description ? "?description=" + description : "";
        const response = await axios.get(URL + search);
        
        this.setState({
            ...this.state,
            list: response.data,
            description
        });
    }

    async handleSearch(){
        await this.refresh(this.state.description);
    }

    handleChange(e){
        this.setState({
            ...this.state, 
            description: e.target.value
        });
    }

    async handleAdd(){
        const description = this.state.description;
        await axios.post(URL, {description});
        this.setState({
            ...this.state,
            description: ""
        });
        await this.refresh();
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Form description={this.state.description} handleClear={this.handleClear} handleSearch={this.handleSearch} handleChange={this.handleChange} handleAdd={this.handleAdd} />
                <List list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        );
    }
}