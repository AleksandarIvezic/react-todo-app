/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { todo } = props;
  const { completed, id, title } = todo;
  const [editing, setEditing] = useState(false);
  const viewMode = {};
  const editMode = {};

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    // eslint-disable-next-line
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button type="submit" onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
