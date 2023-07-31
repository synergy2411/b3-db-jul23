import React, { useState } from "react";
import { ITodo } from "../../../model/todo";

interface IProps {
  addNewTodo: (todo: ITodo) => void;
}

const AddTodo: React.FC<IProps> = (props) => {
  const [enteredLabel, setEnteredLabel] = useState<string>("");

  const submitClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let newTodo: ITodo = {
      id: Math.round(Math.random() * 1000).toString(),
      label: enteredLabel,
    };
    props.addNewTodo(newTodo);
  };
  return (
    <div className="row mb-4">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h4 className="text-center">Add Item</h4>
            <form>
              <div className="row">
                <div className="col-8">
                  {/* input field */}
                  <input
                    type="text"
                    className="form-control"
                    value={enteredLabel}
                    onChange={(e) => setEnteredLabel(e.target.value)}
                  />
                </div>
                <div className="col-4">
                  {/* button */}
                  <div className="d-grid">
                    <button
                      className="btn btn-secondary"
                      onClick={submitClickHandler}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
