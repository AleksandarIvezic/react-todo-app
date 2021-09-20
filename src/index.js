import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <TodoContainer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
