import React  from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './component/Todo';
import taskHandler from './redux/reducers';

let store = createStore(taskHandler);
render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
);

