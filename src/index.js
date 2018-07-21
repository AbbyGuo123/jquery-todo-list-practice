import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App'
import counter from './reducer/index'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"

const store = createStore(counter)
ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
