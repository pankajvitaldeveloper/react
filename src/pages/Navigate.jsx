import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
    const navigae = useNavigate();
const goHome = () => {
    navigae('/')
}
const goBack = () => {
    navigae(-1)
}
  return (
    <div>

        <div className="container mt">
            <div className="row">
                <div className="col-md-12">
                    <p className='mb-3'>
                    In React Router, Navigate is used to redirect users to another route programmatically or based on a condition. It's the replacement for useHistory().push() from older versions of React Router.
                    </p>
                    <div className=""><button onClick={goHome} className='btn btn-primary'>Go Home</button> &nbsp;
                    <button onClick={goBack} className='btn btn-success'>Go Back</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigate







// //Navigate with State (Pass Data Between Pages)
// import { useNavigate } from "react-router-dom";

// function CourseList() {
//   const navigate = useNavigate();

//   const goToDetails = () => {
//     navigate("/course/1", { state: { title: "React for Beginners", price: 49.99 } });
//   };

//   return <button onClick={goToDetails}>View Course</button>;
// }

// export default CourseList;








// //Example: Get Data in CourseDetails.jsx

// import { useLocation } from "react-router-dom";

// function CourseDetails() {
//   const location = useLocation();
//   const course = location.state; // Getting passed data

//   return (
//     <div>
//       <h1>{course?.title || "No Course Found"}</h1>
//       <p>Price: ${course?.price}</p>
//     </div>
//   );
// }

// export default CourseDetails;
