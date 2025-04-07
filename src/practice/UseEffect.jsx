import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [apiData, setApiData] = useState([]);

    useEffect(()=>{

       const fetchData  = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await api.json();

            setApiData(data)
       } 
    
       fetchData()

    },[])
    

    

  return (
    <div>
        <h1>Api Fetch</h1>
        {apiData.map((item)=>(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body} </p>
            </div>
        ))}
    </div>
  )
}

export default UseEffect