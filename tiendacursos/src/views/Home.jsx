import React from 'react'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'


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