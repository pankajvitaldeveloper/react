import { useState, useRef, useEffect } from "react";

const UseReference = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  const inputRef = useRef(null);

  // //attact with element
  useEffect(() => {
    inputRef.current.focus(); // Automatically focus on input when component mounts
  }, []);

  // //store data in useRef
  useEffect(() => {
    prevCountRef.current = count; // Store previous count value
  }, [count]);

  return (
    <>
      <div className="cover mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap">
                useRef Hook in React – Deep Dive <br />
                The useRef hook is used to:
                <div className="mt-3 mb-3">
                  <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
                <ul>
                  🔥
                  <li>✅ Access and manipulate DOM elements</li>
                  <li>✅ Store values without causing re-renders</li>
                  <li>✅ Hold mutable references across renders</li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 mb-5">
              <div>
                <p>Current Count: {count}</p>
                <p>Previous Count: {prevCountRef.current}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            </div>
            <div className="col-md-12">
                <h5>See Images for better understand</h5>
            </div>
            <div className="col-md-6">
              <img src="/img/useref1.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useref2.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useref3.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useref4.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useref5.PNG" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReference;
