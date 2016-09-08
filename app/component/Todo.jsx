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
        const {dispatch, tasks, filterType,getState} = this.props;
        return (
            <div>
                <h1>ToDoMVC System</h1>
                
                <TodoForm addTask={(text) => dispatch(action.addTask(text))} />
                <TodoList tasks={tasks} filterType={filterType}delTask={(index) => dispatch(action.deleteTask(index)) }
                    doneTask={(index) => dispatch(action.completeTask(index)) } />
                <TodoFilter filterHandler={(filter) => dispatch(action.setFilterType(filter)) }/>
                <TodoCount tasks={tasks}/>
                <TodoLoad handleLoad={()=>dispatch(action.loadTask())}/>
            </div>
        );
    }
}

export default connect((state) => (
    { tasks: state.handleTask, filterType: state.filter}
))(Todo);
