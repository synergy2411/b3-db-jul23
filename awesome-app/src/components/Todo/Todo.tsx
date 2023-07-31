import TodoItem from "./TodoItem/TodoItem";

function Todo() {
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
        <TodoItem todo={todoCollection[0]} />
        <TodoItem todo={todoCollection[1]} />
        <TodoItem todo={todoCollection[2]} />
        <TodoItem todo={todoCollection[3]} />
      </div>
    </div>
  );
}

export default Todo;
