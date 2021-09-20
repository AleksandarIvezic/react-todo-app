import React from "react"

const TodoItem = (props) => {
  return (
    <li>
    <input type='checkbox' /> {props.todo.title}
    </li>
  )
}

export default TodoItem