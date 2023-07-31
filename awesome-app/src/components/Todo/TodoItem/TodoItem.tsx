import React, { useContext } from "react";
import { ITodo } from "../../../model/todo";
import classes from "./TodoItem.module.css";
import AuthContext from "../../../context/auth-context";

interface IProps {
  todo: ITodo;
  deleteTodo: (todoId: string) => void;
}

const TodoItem: React.FC<IProps> = (props) => {
  return (
    <div className="col-4 mb-4">
      <div
        className={`card ${classes["my-card"]}`}
        onClick={() => props.deleteTodo(props.todo.id)}
      >
        <div className="card-header">
          <h5 className="text-center">{props.todo.label.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
