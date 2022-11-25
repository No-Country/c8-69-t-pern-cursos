import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CoursDetail from '../components/CourseDetail'


const Home = () => {

  return (
    <div className='container-xl '>
    <NavBar />
      <Header />
      <main class="row">
        <Card />
      </main>
      <Footer />       
      <CoursDetail />
    </div>
  )
}

export default Home