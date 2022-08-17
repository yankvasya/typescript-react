import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoProps {
  todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <div style={{ display: "flex", gap: "10px", border: "1px solid black" }}>
      <input type="checkbox" checked={todo.completed} />
      <h5>{todo.id}</h5>
      <h3>{todo.title}</h3>
      <h4>{todo.userId}</h4>
    </div>
  );
};

export default Todo;
