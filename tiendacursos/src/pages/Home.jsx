import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


const Home = () => {

  return (
    <div className='container-xl '>
      <NavBar />
      <Header />
      <main class="row">
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default Home