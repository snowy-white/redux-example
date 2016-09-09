import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';
import TodoLoad from './TodoLoad';
import * as action from '../redux/actions';

class Todo extends Component {
    render() {
        const {dispatch, tasks, filterType, getState} = this.props;
        return (
            <div>
                <h1>ToDoMVC System</h1>

                <TodoForm addTask={(text) => Promise.resolve(dispatch(action.addTask(text))).then(() => (action.receiveTask(text))) } />
                <TodoList tasks={tasks} filterType={filterType}
                    delTask={(index) => Promise.resolve(dispatch(action.deleteTask(index))).then(() => (action.removeTask(index))) }
                    doneTask={(index) => Promise.resolve(dispatch(action.completeTask(index))).then(() => (action.updateTask(index))) } />
                <TodoFilter filterHandler={(filter) => dispatch(action.setFilterType(filter)) }/>
                <TodoCount tasks={tasks}/>
                <TodoLoad handleLoad={() => dispatch(action.requestTask()) }/>
            </div>
        );
    }
}

export default connect((state) => (
    { tasks: state.handleTask, filterType: state.filter }
))(Todo);
