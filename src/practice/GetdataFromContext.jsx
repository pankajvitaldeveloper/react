import React, { useContext } from "react";
import MoneyContext from "../context/MoneyContext";

const GetdataFromContext = () => {
  const {money, count, setCount} = useContext(MoneyContext);

  return (
    <>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-12">
            <div>{money} This is coming form useContext</div>
            <div className="">{count}</div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
          </div>
          <div className="col-md-12 mt-5">
          🔥 useContext Hook in React – Deep Dive
          The useContext hook allows components to access global state without passing props manually through every level (prop drilling). It’s used to manage global state such as themes, authentication, user settings, etc.
          </div>
          <div className="col-md-12">
            See the image for better understand
          </div>
          <div className="col-md-6"><img src="/img/useContext1.PNG" alt="" className="img-fluid" /></div>
          <div className="col-md-6"><img src="/img/useContext2.PNG" alt="" className="img-fluid" /></div>
          <div className="col-md-6"><img src="/img/useContext3.PNG" alt="" className="img-fluid" /></div>
          <div className="col-md-6"><img src="/img/useContext4.PNG" alt="" className="img-fluid" /></div>
          <div className="col-md-6"><img src="/img/useContext5.PNG" alt="" className="img-fluid" /></div>
        </div>
      </div>
    </>
  );
};

export default GetdataFromContext;
