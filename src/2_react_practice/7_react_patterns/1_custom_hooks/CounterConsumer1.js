import useCounter from "./useCounter";

const CounterConsumer1 = () => {

    const [counterValue,increment, decrement] = useCounter();

    return (
        <>
            <h1>Magic counter: {counterValue}</h1>
            <button onClick={increment}>+</button>
        </>
    );
}

export default CounterConsumer1;