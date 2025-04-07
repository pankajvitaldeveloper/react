import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Fetched Data:</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div className="row">
        <div className="col-md-12">
        🔥 Creating a Custom Hook for Fetching API Data in React
A custom hook allows us to reuse logic across multiple components. Let's create a useFetch hook to fetch API data efficiently.


        </div>
        <div className="col-md-6"><img src="/img/useCumtomHook1.PNG" alt="" className="img-fluid" /></div>
        <div className="col-md-6"><img src="/img/useCumtomHook2.PNG" alt="" className="img-fluid" /></div>
      </div>
    </div>
  );
};

export default CustomHook;
