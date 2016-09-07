import React, {Component, PropTypes} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    handleChangeValue(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        var value = this.state.value;
        return (
            <div>
                <form onSubmit={this.handleAdd.bind(this) }>
                    <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo"
                        value={value} onChange={this.handleChangeValue.bind(this) }/>
                </form>
            </div>
        );
    }
    handleAdd(e) {
        e.preventDefault();
        let taskname = this.state.value.trim();
        if (taskname) {
            this.props.addTask(taskname);
        }

        this.setState({ value: '' });
    }

}

TodoForm.propTypes = {
    addTask: PropTypes.func.isRequired
};

export default TodoForm;
