import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [loggedIN,setLoggedIN] = useState(false);
  const navgiate = useNavigate;

  const login = ()=>{
    setLoggedIN(true)
    navgiate('/dashboard')

  }
  const logout = ()=>{
    setLoggedIN(false)
  }


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!loggedIN && (<>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/meal">
                  Meal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movie">
                  Movie
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/showdata">
                Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/navigate">
                  Navigate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  Form Handle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/redux">
                  Redux
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Hook
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/usestate">
                      useState
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usereducer">
                      useReducer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useeffect">
                      useEffect
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usereference">
                      useReference
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useContext">
                      useContext
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecallback">
                      useCallback
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecallbackwithmemo">
                      useCallback With Memo 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usememo">
                      useMemo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/customhook">
                      Custom Hook
                    </Link>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item">
                <button className="nav-link bg-success" onClick={login}>
                  Login
                </button>
              </li>
              </>)}

              {loggedIN && (<>
                <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
             
             
              <li className="nav-item ">
                <button className="nav-link bg-danger" onClick={logout}>
                  Logout
                </button>
              </li>
              </>)}
              
            </ul>
            
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Header