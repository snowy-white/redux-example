import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';
//import {addTask, completeTask, deleteTask, setFilterType, FilterType} from '../redux/actions';
import * as action from '../redux/actions';

class Todo extends Component {
    render() {
        const {dispatch, tasks, filterType} = this.props;
        return (
            <div>
                <h1>ToDoMVC System</h1>
                <TodoForm addTask={(text) => dispatch(action.addTask(text)) } />
                <TodoList tasks={tasks} filterType={filterType}delTask={(index) => dispatch(action.deleteTask(index)) }
                    doneTask={(index) => dispatch(action.completeTask(index)) } />
                <TodoFilter filterHandler={(filter) => dispatch(action.setFilterType(filter)) }/>
                <TodoCount tasks={tasks}/>
            </div>
        );
    }
}

export default connect((state) => ({ tasks: state.handleTask, filterType: state.filter }))(Todo);

