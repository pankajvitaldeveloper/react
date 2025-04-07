import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  //   //Runs After Every Render
  useEffect(() => {
    console.log("Effect ran!"); // Runs after every render
  });

  return (
    <>
      <div className="cover mt-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="wrap">
                <img src="/img/useeffect.PNG" alt="" className="img-fluid" />
                <ul>
                  The useEffect hook in React is used to handle side effects in
                  functional components, such as:
                  <li>✅ Fetching data</li>
                  <li>✅ Subscribing to events</li>
                  <li>✅ Updating the DOM</li>
                  <li>✅ Setting up timers</li>
                </ul>
              </div>
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/img/useeffect2.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useeffect3.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useeffect4.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useeffect5.PNG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="/img/useeffect6.PNG" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
