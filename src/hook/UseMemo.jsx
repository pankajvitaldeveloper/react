import { useState, useMemo } from "react";

const slowFunction = (num) => {
  console.log("🛑 Running slow function...");
  for (let i = 0; i < 1000000000; i++) {} // Simulating a heavy computation
  return num * 2;
};

function UseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // ✅ Memoized computation
  const result = useMemo(() => slowFunction(count), [count]);

  return (
    <div className="container">
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="row g-4">
        <div className="col-md-12">
        🔥 useMemo Hook in React – Deep Dive
        The useMemo hook memoizes a computed value so that it doesn’t get recalculated on every render. This helps optimize performance by preventing expensive calculations from running unnecessarily.
        </div>
        <div className="col-md-6"><img src="/img/useMemo1.PNG" alt="" className="img-fluid"></img></div>
        <div className="col-md-6"><img src="/img/useMemo2.PNG" alt="" className="img-fluid"></img></div>
        <div className="col-md-6"><img src="/img/useMemo3.PNG" alt="" className="img-fluid"></img><img src="/img/useMemoin3.PNG" alt="" className="img-fluid"></img></div>
        <div className="col-md-6"><img src="/img/useMemo4.PNG" alt="" className="img-fluid"></img></div>
        <div className="col-md-6"><img src="/img/useMemo5.PNG" alt="" className="img-fluid"></img></div>
        <div className="col-md-6"><img src="/img/useMemo7.PNG" alt="" className="img-fluid"></img></div>
      </div>
    </div>
  );
}

export default UseMemo;
