import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {setupStore} from './application/store'
import {services} from './services'

ReactDOM.render(
<Provider store={setupStore(services)}> 
    <App />
</Provider>
, document.getElementById('root'));
