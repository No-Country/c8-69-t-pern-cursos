import React from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../db/db'

const CourseList = () => {
  const navigate = useNavigate()

  const handleNavigation = (id) => {
    navigate(`/course/${id}`)
  }
  return (
    <>
      {

        db.map((course) => (
          <div onClick={() => handleNavigation(course.id)} className="card mb-3 mt-4 bg-dark" key={course.id}>
            <div className="row g-0">
              <div className="col-md-4 col-8">
                <img
                  src={course.img_couse}
                  className="img-fluid rounded-start imgCard"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title text-light fs-2 fw-bold">
                    {course.title}
                  </h1>
                  <p className="card-text text-muted fs-5">
                    {course.description}
                  </p>
                  <p className="text-warning ">★★★★★ </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <p className="text-light">
                    Creado por <span>{course.teacher.name}</span>
                  </p>
                  <p>
                    Nivel <span>{course.level[0]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))

      }
    </>
  )
}

export default CourseList