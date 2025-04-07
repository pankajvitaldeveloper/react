1
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../MovieZone/Button";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [category, setCategory] = useState("Canadian");
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (initialLoad || mealData.length === 0) {
        setLoading(true);
      }
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`
      );
      const data = await response.json();
      setMealData(data.meals || []);
      setLoading(false);
      setInitialLoad(false);
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (inputData.trim() === "") return;
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
      );
      const data = await response.json();
      setMealData(data.meals || []);
      setLoading(false);
    };

    const debounceSearch = setTimeout(fetchSearchResults, 500);
    return () => clearTimeout(debounceSearch);
  }, [inputData]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center mb-3">
        <Button
          title="Indian"
          btn="btn btn-outline-success"
          onClick={() => setCategory("Indian")}
        />
        <Button
          title="Canadian"
          btn="btn btn-outline-danger"
          onClick={() => setCategory("Canadian")}
        />
        <Button
          title="American"
          btn="btn btn-outline-warning"
          onClick={() => setCategory("American")}
        />
        <Button
          title="Thai"
          btn="btn btn-outline-info"
          onClick={() => setCategory("Thai")}
        />
        <Button
          title="British"
          btn="btn btn-outline-light"
          onClick={() => setCategory("British")}
        />
        <Button
          title="Russian"
          btn="btn btn-outline-dark"
          onClick={() => setCategory("Russian")}
        />
      </div>
      <div
        className="input-search mb-5"
        style={{ width: "300px", margin: "0 auto" }}
      >
        <input
          type="text"
          className="form-control"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Search meals..."
        />
      </div>
      <div className="row">
        {loading
        // 1. If loading is true:
        // It renders 8 placeholder cards using a "skeleton loader" effect.
        // Array(8) creates an array with 8 undefined values.
        // map loops through it to render 8 skeleton UI blocks.
        // skeleton-img and skeleton-text are usually CSS classes that apply gray animated loading boxes.
          ? [...Array(8)].map((_, index) => (
              <div key={index} className="col-md-3">
                <div className="meal-card loading">
                  <div className="skeleton skeleton-img"></div>
                  <div className="skeleton skeleton-text"></div>
                </div>
              </div>
            ))
          : mealData.map((item) => (
              <div key={item.idMeal} className="col-md-3">
                <div className="meal-card">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="img-fluid"
                  />
                  <h5>{item.strMeal}</h5>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Meal;

// Add this CSS for skeleton loading effect
// .skeleton { background: #ddd; border-radius: 5px; animation: shimmer 1.5s infinite linear; }
// .skeleton-img { width: 100%; height:
