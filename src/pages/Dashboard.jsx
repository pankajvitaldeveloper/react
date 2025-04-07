import React, { useContext } from 'react';
import MoneyContext from '../context/MoneyContext';
import TestContext from '../context/TestContext';


const Dashboard = () => {
  // console.log(useContext(MoneyContext));
  const {money, count, setCount}= useContext(MoneyContext)
   const {testcount, setTestCounter,} = useContext(TestContext)
  return (
    <>
    <div>Dashboard {money}  </div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count + 1)}>click</button>
    <div className="test">
      <h1>{testcount}</h1>
      <button onClick={()=>setTestCounter(testcount + 1)}>increment</button>
    </div>
    </>
  )
}

export default Dashboard