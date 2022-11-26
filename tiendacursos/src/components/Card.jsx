import React from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../db/db'

const Card = () => {

  const navigate = useNavigate()

  const handleNavigation = (id) => {
    navigate(`/course/${id}`)
  }
  return (
    <>
      {db.map((course) => <div key={course.id} className="col-md-3 mt-4">

        <div onClick={() => handleNavigation(course.id)} className="card">
          <img
            src={course.img_couse}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {course.title}
            </h5>
            <p className="card-text"></p>
            <p>{course.teacher.name}</p>
            <p>
              ★★★★★ <span><b>${course.price}.00</b></span>
            </p>
            <button onClick={() => handleNavigation(course.id)} className="btn btn-primary">
              Detalles
            </button>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Card