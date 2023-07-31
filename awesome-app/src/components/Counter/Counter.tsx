import { useSelector } from "react-redux";
import { IAppState } from "../../store";
import CounterAction from "./CounterAction";

export default function Counter() {
  const counter = useSelector((store: IAppState) => store.ctr.counter);

  return (
    <div className="text-center">
      <p className="display-4">Counter : {counter}</p>
      <hr />
      <CounterAction />
    </div>
  );
}
