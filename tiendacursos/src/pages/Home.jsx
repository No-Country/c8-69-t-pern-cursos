import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


const Home = () => {



  return (
    <div className='container-fluid'>
      <NavBar />
      <Header />
      <main >
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default Home