import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-12">
            <img src="/img/usereducer.PNG" alt="sytax of reducer" className="img-fluid" />
            <p className="mt-4">
            The useReducer hook in React is an alternative to useState, useful for managing complex state logic in functional components. It takes a reducer function and an initial state, returning the current state and a dispatch function to update the state.
            </p>
        </div>
      <div className="col-md-12 mb-4">
      <p>Count: {state.count}</p>
      <button className="btn btn-success" onClick={() => dispatch({ type: "increment" })}>+</button>
      <button className="btn btn-success" onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
      <div className="col-md-6"><img src="/img/useReducer2.PNG" alt="" className="img-fluid" /></div>
      <div className="col-md-6"><img src="/img/useReducer3.PNG" alt="" className="img-fluid" /></div>
      </div>
    </div>
  );
}

export default UseReducer;
