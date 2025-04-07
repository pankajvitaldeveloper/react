import { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // //Function recreated on every render below code comment and you can check it that children component is recreated or not!❌
//   const handleClick = () => {
//     console.log("🔴 handleClick function recreated!");
//   };


  //// Function is memoized ✅
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <>
      <div className="cover">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12">
              useCallback Hook in React – Deep Dive The useCallback hook
              memoizes a function so that it doesn't get recreated on every
              render. This helps with performance optimization, especially when
              passing functions as props to child components.
            </div>
            <div className="col-md-12">
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <UseCallbackChild onClick={handleClick} />
              </div>
            </div>
            <div className="col-md-6"><img src="/img/useCallback1.PNG" alt="" className="img-fluid" /></div>
            <div className="col-md-6"><img src="/img/useCallback2.PNG" alt="" className="img-fluid" /></div>
            <div className="col-md-6"><img src="/img/useCallback3.PNG" alt="" className="img-fluid" /></div>
            <div className="col-md-6"><img src="/img/useCallback4.PNG" alt="" className="img-fluid" /><img src="/img/useCallback5.PNG" alt="" className="img-fluid" /><img src="/img/useCallback-in6.PNG" alt="" className="img-fluid" /></div>
            <div className="col-md-6"><img src="/img/useCallback7.PNG" alt="" className="img-fluid" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCallback;
