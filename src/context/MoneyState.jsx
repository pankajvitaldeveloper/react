import React, { useState } from 'react';
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
    const [count, setCount] = useState(0)
    const money = 1000;

  return (
    <div>
        <MoneyContext.Provider value={{
            money, count, setCount,
        }}>
            {props.children}
        </MoneyContext.Provider> 
    </div>
  )
}

export default MoneyState

// 3 step wrap the app for use global
// 4 step where you want use for example i use in dashboard page for check
