import { useState } from "react";

import TodoItem from "./TodoItem/TodoItem";

function Todo() {
  let [toggle, setToggle] = useState<boolean>(false);

  let todoCollection = [
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-dark" onClick={() => setToggle(!toggle)}>
              {toggle ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
      {toggle && <p>Some cool content</p>}

      <div className="row">
        {todoCollection.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
