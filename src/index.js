import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router><App /></Router>
  ,
  document.getElementById('root')
);
