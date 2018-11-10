import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import { Router, browserHistory } from 'react-router';



import routes from "./reducers/routes";




ReactDOM.render(
  <div>
    < Router history = {
      browserHistory
    }
    routes = {
      routes
    }
    />
  </div>
  , document.querySelector('#kohls-app'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
