import useCounter from "./useCounter";

const CounterConsumer = () => {
  const [counterValue, increment, decrement] = useCounter();

  return (
    <>
      <h1>Counter: {counterValue}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default CounterConsumer;
