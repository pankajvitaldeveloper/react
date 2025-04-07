import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child component rendered!");
  return <button onClick={onClick}>Click Me</button>;
});

function UseCallbackWithMemo() {
  const [count, setCount] = useState(0);

  // Memoize function
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackWithMemo;
