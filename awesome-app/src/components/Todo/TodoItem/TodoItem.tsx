import React from "react";

interface ITodo {
  id: string;
  label: string;
}

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = (props) => {
  console.log(props.todo.label);
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">Todo Item</h5>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
