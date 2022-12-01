import React, { useEffect } from 'react'

const UserProfile = ({ setShow, show }) => {
  useEffect(() => {
    if (show === false || show === undefined) {
      setShow(true)
    }
  }, [])

  return (
    <div className='container'>
      <h1>UserProfile</h1>
    </div>
  )
}

export default UserProfile