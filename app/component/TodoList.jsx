import React, {Component, PropTypes} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(delindex) {
        this.props.delTask(parseInt(delindex));
    }
    handleDone(doneindex) {
        this.props.doneTask(parseInt(doneindex));
    }
    render() {
        const {tasks, filterType} = this.props;
        return (
            <div>
                <ul id="todo-list">
                    {
                        this.generateDisplayList(tasks, filterType).map((item, i) => {
                            return (
                                <TodoItem item={item} key={i} Done={this.handleDone.bind(this, i) }
                                    Del={this.handleDel.bind(this, i) }/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    generateDisplayList(tasks, filterType) {
        switch (filterType) {
            case "SHOW_COMPLETE":
                return tasks.filter((element) => {
                    return element.completed == true;
                });
            case "SHOW_ACTIVE":
                return tasks.filter((element) => {
                    return element.completed == false;
                });
            default:
                return tasks;
        }
    }
}

class TodoItem extends Component {
    handleStyle(item) {
        if (item.completed === false) {
            return "font3";
        }
        else {
            return "font2";
        }
    }
    render() {
        return (
            <div>
                <li>
                    <lable  className={this.handleStyle(this.props.item) }>{this.props.item.text}</lable>
                    <button className="done" onClick={this.props.Done} >Done</button>
                    <button className="delete" onClick={this.props.Del}>Remove</button>
                </li>
            </div>
        );
    }
}

TodoList.propTypes = {
    delTask: PropTypes.func.isRequired,
    doneTask: PropTypes.func.isRequired,
    tasks:PropTypes.array.isRequired,
    filterType: PropTypes.string.isRequired
};

export default TodoList;
