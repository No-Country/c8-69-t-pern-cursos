import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'


const Home = () => {

  return (
    <div className='container-xl '>
      <Header />
      <main className="row">
        <Card />
      </main>
    </div>
  )
}

export default Home