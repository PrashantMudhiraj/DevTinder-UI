import { useEffect, useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);
  2;
  const handleClick = (IncrementBy) => {
    setCount(count + IncrementBy);
  };

  return {
    handleClick,
    count,
  };
};

export default useCounter;
