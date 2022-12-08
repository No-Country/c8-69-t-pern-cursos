import React, { useEffect } from 'react'

const MyCourseById = ({ setShow, show }) => {
  useEffect(() => {
    if (show === false || show === undefined) {
      setShow(true)
    }
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 col-sm-12 offset-sm-1 col-xs-12'>
          <h1>My Courses Details</h1>
        </div>
      </div>
    </div>
  )
}

export default MyCourseById