import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CoursDetail from '../components/CourseDetail'


const Home = () => {

  return (
    <div className='container-xl '>
    <NavBar />
      <Header />
      <main className="row">
        <Card />
      </main>
      <Footer />       
      <CoursDetail />
    </div>
  )
}

export default Home