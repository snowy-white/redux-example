import { combineReducers } from 'redux';
//import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_FILTER_TYPE, FilterType} from './actions';
import * as actionType from './actions';
const {SHOW_ALL} = actionType.FilterType;

const filter = (filterType = SHOW_ALL, action) => {
    switch (action.type) {
        case actionType.SET_FILTER_TYPE:
            return action.filter;
        default:
            return filterType;
    }
};

const handleTask = (tasks = [], action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return [
                ...tasks,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case actionType.COMPLETE_TASK:
            return [
                ...tasks.slice(0, action.index),
                Object.assign({}, tasks[action.index], {
                    completed: true
                }),
                ...tasks.slice(action.index + 1)
            ];
        case actionType.DELETE_TASK:
            return [
                ...tasks.slice(0, action.index),
                ...tasks.slice(action.index + 1)
            ];
        default:
            return tasks;
    }
};

const taskHandler = combineReducers(
    {
        filter,
        handleTask
    }
);

export default taskHandler;
