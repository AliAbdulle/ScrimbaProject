import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Tapps from './components/Tapps';
// import Apps from './components/Apps';
import * as serviceWorker from './serviceWorker';
//import Login from './components/Login';
//import Appapi from './components/Appapi';
import Form from './components/Form';
//App Render
ReactDOM.render(
<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
