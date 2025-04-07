1
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Showdata = () => {
  const [data, setData] = useState([]); // Stores API data
  const [filteredData, setFilteredData] = useState([]); // Stores filtered data
  const [category, setCategory] = useState(""); // Category filter state
  const [price, setPrice] = useState(""); // Price filter state

  useEffect(() => {
    fetch("https://api.pujakaitem.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Set initial data
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  // useEffect to filter automatically when category or price changes
  useEffect(() => {

    let filterd = data;

    if(category){
        filterd = filterd.filter((item)=>item.category.toLowerCase() === category.toLowerCase());
    }
    if(price === "low"){
        filterd = filterd.filter((item)=>item.price < 500000);
    }else if (price === "high") {
        filterd = filterd.filter((item)=>item.price > 500000);
    }

    setFilteredData(filterd)
    
  }, [category, price, data]); // Runs whenever category, price, or data changes

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>

      {/* Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Price</label>
          <select className="form-control" onChange={(e) => setPrice(e.target.value)}>
            <option value="">All Prices</option>
            <option value="low">Below ₹5,000,000</option>
            <option value="high">Above ₹5,000,000</option>
          </select>
        </div>
      </div>

      {/* Product Display */}
      <div className="row">
        {filteredData.length === 0 ? (
          <h4 className="text-center">No Products Found</h4>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="text-muted">{item.company}</h6>
                  <p className="card-text">{item.description.substring(0, 100)}...</p>
                  <p className="fw-bold text-primary">Price: ₹{item.price}</p>
                  <p className="badge bg-info">{item.category}</p>
                  <a href="#" className="btn btn-success">Buy Now</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Showdata;
