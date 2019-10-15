import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Router><Application /></Router>, document.getElementById('root'));
