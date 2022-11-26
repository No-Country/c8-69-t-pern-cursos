import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container'>
      <div className='row align-items-center border-left-color' style={{ height: '90vh' }}>
        <p className='fs-1 text-danger'>Lo setimos esta pagina no existe.</p>
        <Link to='/'>Return Home</Link>
      </div>

    </div>
  )
}

export default Error404