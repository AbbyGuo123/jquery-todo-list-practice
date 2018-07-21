import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import ToDoApp from './container/ToDoApp'
import counter from './reducer/index'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"

const store = createStore(counter)
ReactDOM.render(
    <Provider store={store}>
<ToDoApp />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
