import { useDispatch, useSelector } from "react-redux";

// Define the type for your Redux state
interface RootStateType {
  counter: {
    count: number;
  };
}

export default function Counter() {
  // ========== Redux Method ==============
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateType) => state);
  const count = data.counter.count;

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <h1>Counter</h1>
      <div className="flex justify-center items-center">
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}
