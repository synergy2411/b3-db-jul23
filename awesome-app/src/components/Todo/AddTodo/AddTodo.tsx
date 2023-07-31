import React, { useState } from "react";
import { ITodo } from "../../../model/todo";

interface IProps {
  addNewTodo: (todo: ITodo) => void;
}

const AddTodo: React.FC<IProps> = (props) => {
  const [enteredLabel, setEnteredLabel] = useState<string>("");
  const [isError, setIsError] = useState(false);

  const labelChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredLabel(e.target.value);
  };

  const submitClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (enteredLabel.trim() === "") {
      setIsError(true);
      return;
    } else if (enteredLabel.length < 6) {
      setIsError(true);
      return;
    }
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
                    onChange={labelChangeHandler}
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
              {isError && <p className="alert alert-danger">Some went wrong</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
