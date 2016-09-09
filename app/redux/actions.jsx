import $ from 'jquery';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';
export const LOAD_TASK = 'LOAD_TASK';

export const FilterType = {
    SHOW_ALL: 'SHOW_ALL',
    SHOE_COMPLETE: 'SHOE_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTask = (text) => ({ type: ADD_TASK, text });
export const completeTask = (index) => ({ type: COMPLETE_TASK, index });
export const deleteTask = (index) => ({ type: DELETE_TASK, index });
export const setFilterType = (filter) => ({ type: SET_FILTER_TYPE, filter });
export const loadTask = (data) => ({ type: LOAD_TASK, data });
const uri = "/app/file";
export const requestTask = () => (dispatch) => (
    $.ajax({
        type: 'GET',
        url: uri,
        dataType: 'json',
        success: (data) => Promise.resolve(dispatch(loadTask(data))).then(() => (alert("load tasks success!"))),
        error: function (xhr, status, err) {
            console.log(uri, status, err.toString());
        }.bind(this)
    })
);
export const receiveTask = (text) => {
    let task = {
        text,
        completed: false
    };
    return $.ajax({
        type: 'POST',
        url: uri,
        dataType: 'json',
        data: task,
        success: () => (alert("add task success!")),
        error: function (xhr, status, err) {
            console.log(uri, status, err.toString());
        }.bind(this)
    });
};

export const updateTask = (index) => {
    let idx = { index };
    return $.ajax({
        type: 'PUT',
        url: uri,
        dataType: 'json',
        data: idx,
        success: () => (alert("complete task success!")),
        error: function (xhr, status, err) {
            console.log(uri, status, err.toString());
        }.bind(this)
    });
};

export const removeTask = (index) => {
    let idx = { index };
    return $.ajax({
        type: 'DELETE',
        url: uri,
        dataType: 'json',
        data: idx,
        success: () => (alert("delete task success!")),
        error: function (xhr, status, err) {
            console.log(uri, status, err.toString());
        }.bind(this)
    });
};


