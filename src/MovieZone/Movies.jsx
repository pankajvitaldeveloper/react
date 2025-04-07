import React, { useEffect, useState } from "react";
import { movies } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button"; // Import custom Button component

const Movies = () => {
    const [filtered, setFiltered] = useState(movies); // Initially show all movies
    const [category, setCategory] = useState("All");

    // Function to handle category selection
    const handleFilter = (select) => {
        setCategory(select)
    }

    useEffect(()=>{
        if(category === "All"){
            setFiltered(movies)
        }else{
            setFiltered(movies.filter((item)=>item.category === category))
        }
    },[category])

    // Filtering logic when category changes

  
    return (
        <div className="container">
            <div className="row">
                {/* Category Buttons */}
                <div className="col-md-12">
                    <div className="movie-wrap d-flex justify-content-center gap-2">
                        <Button title="All" btn="btn btn-outline-secondary" onClick={() => handleFilter("All")} />
                        <Button title="Action" btn="btn btn-outline-success" onClick={() => handleFilter("Action")} />
                        <Button title="Thriller" btn="btn btn-outline-danger" onClick={() => handleFilter("Thriller")} />
                        <Button title="Animation" btn="btn btn-outline-warning" onClick={() => handleFilter("Animation")} />
                        <Button title="Horror" btn="btn btn-outline-info" onClick={() => handleFilter("Horror")} />
                        <Button title="Drama" btn="btn btn-outline-light" onClick={() => handleFilter("Drama")} />
                        <Button title="Sci-Fi" btn="btn btn-outline-dark" onClick={() => handleFilter("Sci-Fi")} />
                    </div>
                </div>

                {/* Filtered Movies Display */}
                {filtered.length > 0 ? (
                    filtered.map((item) => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card">
                                <img src={item.backdrop_path} alt={item.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.release_date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-md-12 text-center mt-4">
                        <h4>No movies found for this category</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Movies;
