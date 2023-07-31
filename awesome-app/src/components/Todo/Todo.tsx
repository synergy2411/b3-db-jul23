import { useState } from "react";

import TodoItem from "./TodoItem/TodoItem";
import AddTodo from "./AddTodo/AddTodo";
import { ITodo } from "../../model/todo";

const INITIAL_TODOS: ITodo[] = [
  {
    id: "t001",
    label: "pot the plants",
  },
  {
    id: "t002",
    label: "renew car insurance",
  },
  {
    id: "t003",
    label: "buy jeans",
  },
  {
    id: "t004",
    label: "shop for grocery",
  },
];
function Todo() {
  let [toggle, setToggle] = useState<boolean>(false);
  const [todoCollection, setTodoCollection] = useState<ITodo[]>(INITIAL_TODOS);

  const addNewTodo = (todo: ITodo) => {
    // todoCollection.push(todo)                   // NEVER DO THIS // STATE IS CONSIDERED AS IMMUTABLE
    // setTodoCollection(todoCollection);
    setTodoCollection((prevTodos) => [todo, ...prevTodos]);
    setToggle(false);
  };

  const deleteTodo = (todoId: string) => {
    const filteredTodos = todoCollection.filter((todo) => todo.id !== todoId);
    setTodoCollection(filteredTodos);
  };
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-dark" onClick={() => setToggle(!toggle)}>
              {toggle ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
      {toggle && <AddTodo addNewTodo={addNewTodo} />}

      <div className="row">
        {todoCollection.map((todo) => (
          <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
