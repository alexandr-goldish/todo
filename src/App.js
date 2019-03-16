import React, { Component } from 'react';
import './App.css';
import InputTask from "./components/inputTask"
import Task from './components/task';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 0, text: "Task1"},
                {id: 1, text: "Task2."},
                {id: 2, text: "Task3"}
            ],
            nextId: 3
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }

    render() {

        return (
            <div className="App">
                <h1>TODOLIST</h1>
                <InputTask todoText="" addTodo={this.addTodo} />
                <ul>
                    {
                        this.state.todos.map((todo) => {
                            return <Task todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;
