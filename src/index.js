import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import routes from './routes';
import Presentation from './components/presentation';
import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
