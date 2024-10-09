import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../action/action";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.task}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
