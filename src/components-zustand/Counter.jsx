import { useStore } from "./store";

const Counter = () => {
  const {counter, increment, decrement, reset} = useStore(state => state)
  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <div>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Res</button>
      </div>
    </>
  );
};

export default Counter;
