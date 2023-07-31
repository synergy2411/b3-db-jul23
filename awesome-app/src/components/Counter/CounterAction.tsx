import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/counter.slice";

export default function CounterAction() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button className="btn btn-warning" onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
}
