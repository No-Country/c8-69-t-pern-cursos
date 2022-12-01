import React, { useEffect } from 'react'
import Card from '../components/Card'
import Divider from '../components/Divider'

const MyCourses = ({ setShow, show }) => {
  useEffect(() => {
    if (show === false || show === undefined) {
      setShow(true)
    }
  }, [])
  return (
    <div className='container row'>
      <h1>MyCourses</h1>
      <Card />
      <Divider />
    </div>
  )
}

export default MyCourses