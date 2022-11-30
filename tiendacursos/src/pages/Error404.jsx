import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container'>
      <div className='row align-items-center border-left-color' style={{ height: '90vh' }}>
        <p className='fs-1 text-danger'>Lo setimos esta pagina no existe. </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci, dolore velit cum doloribus voluptas placeat nulla esse molestiae facere accusamus consequatur excepturi modi amet eligendi dolor. Ullam, molestias dolorem!</p>
        <Link to='/'>Return Home</Link>
      </div>

    </div>
  )
}

export default Error404