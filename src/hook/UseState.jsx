import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0); // Initialize state with 0

  return (
    <>
      <div className="cover">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4 ">
              <div className="wrap">
                <h4>
                  The <b>useState hook </b>in React is used to add state to
                  functional components. It returns an array with two values:
                  the current state and a function to update it.
                </h4>
              </div>
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseState;
