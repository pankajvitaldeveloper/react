import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(1);

    return (
        <>
            <h1>Counter</h1>
            
            
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </>
    )
}

export default Counter;
