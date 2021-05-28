import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Link , BrowserRouter as Router  , Route , useHistory, withRouter} from 'react-router-dom'
import {QueueProvider} from './Contexts/queueContext'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <QueueProvider>
    <Router>
    <App />
    </Router>
    </QueueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
