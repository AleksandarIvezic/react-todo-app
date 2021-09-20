import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer"
import './functionBased/App.css'
import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <TodoContainer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'))