export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';

export const FilterType = {
    SHOW_ALL: 'SHOW_ALL',
    SHOE_COMPLETE: 'SHOE_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const arr=["hello","name","good","money"];
export const addTask=(text)=> ({ type: ADD_TASK, text });
export const completeTask=(index)=> ({ type: COMPLETE_TASK, index });
export const deleteTask=(index)=> ({ type: DELETE_TASK, index });
export const setFilterType=(filter)=> ({ type: SET_FILTER_TYPE, filter });
export const loadTask=()=>(
     (dispatch)=>{
         let i=0;
         return Promise.resolve(
             setInterval(()=> dispatch(addTask(arr[(i<4?i++:i=0)])),2000)   
     );
    }
);


