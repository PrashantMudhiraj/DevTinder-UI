import useCounter from "../hooks/useCounter";
import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
  const { count, handleClick } = useCounter(initialCount);

  return (
    <div>
      <h1>count is {count}</h1>
      <Button onClick={() => handleClick(1)}>Increment</Button>
    </div>
  );
};

export default CounterPage;
