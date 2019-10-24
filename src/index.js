import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './helpers/axios';
import './App.css';
import { socketConnect } from './helpers/socket';

socketConnect();

ReactDOM.render(<App />, document.getElementById('root'));
