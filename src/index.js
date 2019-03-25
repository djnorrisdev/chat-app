import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import "semantic-ui-css/semantic.min.css";
import App from './components/App/App';
require('dotenv').config()

ReactDOM.render(<App />, document.getElementById('root'));
