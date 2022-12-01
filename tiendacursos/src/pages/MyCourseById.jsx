import React, { useEffect } from 'react'

const MyCourseById = ({ setShow, show }) => {
  useEffect(() => {
    if (show === false || show === undefined) {
      setShow(true)
    }
  }, [])

  return (
    <div>MyCourseById</div>
  )
}

export default MyCourseById