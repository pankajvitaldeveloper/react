import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import courseData from './CourseData';

const CourseDetails = () => {
    const { id } = useParams();

    const course = courseData.find(course=>course.id === parseInt(id));

    // const { title } = useParams();
    // const course = courseData.find(course=>course.title === title);
    // console.log(title);


    const location = useLocation();


    if (!course) {
        return <h2>Course not found</h2>;
      }
  return (
    <>

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="offset-md-3 col-md-6">
                <h1>{course.title}</h1>
                    <p>{course.description}</p>

                    {location.pathname != "/course/4" && (
                        <><p><strong>Price:</strong> ${course.price}</p>
                    <p><strong>Duration:</strong> {course.duration}</p></>
                    )}
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CourseDetails