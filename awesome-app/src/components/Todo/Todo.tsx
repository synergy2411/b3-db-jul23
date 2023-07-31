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
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todo;
