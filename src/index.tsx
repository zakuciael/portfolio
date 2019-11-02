import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import {Root} from "./components/Root";

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
