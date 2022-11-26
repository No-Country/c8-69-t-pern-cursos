import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='col'>
      <dir style={{ diplay: 'flex', height: '80vh' }}>
        <h1 style={{ color: 'red' }}>Lo setimos esta pagina no existe.</h1>
        <Link to='/'>Return Home</Link>
      </dir>

    </div>
  )
}

export default Error404