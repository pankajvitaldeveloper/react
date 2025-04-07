import React, {  useState } from 'react'
import courseData from './CourseData';
import { Link } from 'react-router-dom';

const Course = () => {
const [course, setCourse] = useState(courseData);


  return (

    <>

    <div className="container mt-5">
    <div className="row">
    {course.map((item)=>(
      <div key={item.id} className='col-md-4'>
        <div className="wrap">
          <Link to={`/course/${item.id}`}>
          {/* <Link to={`/course/${item.title}`}></Link> */}
          {item.title }
          </Link>
        </div>
      </div>
    ))}
    </div>
    </div>
    
    </>
  )
}

export default Course