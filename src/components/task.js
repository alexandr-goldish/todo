import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }
    render() {
        return (
            <div>
                <div className="row justify-content-between my-5">
                        {this.props.todo.text}
                        <button className="removeTodo btn btn-danger"
                            onClick={(e)=> this.removeTodo(this.props.id) }
                        >delete</button>
                </div>
            </div>
        );
    }
}

export default Task;