import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
