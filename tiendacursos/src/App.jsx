import { Route, HashRouter, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'
import CourseDetail from './pages/CourseDetail'
import Error404 from './pages/Error404'
import { useEffect, useState } from 'react'
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons'
import ProtectedRoutes from './components/ProtectedRoutes'
import MyCourseById from './pages/MyCourseById'
import MyCourses from './pages/MyCourses'
import UserProfile from './pages/UserProfile'



function App() {
  const [show, setShow] = useState()
  // const [aut, setAut] = useState(false);



  useEffect(() => {
    if (show === false || show === undefined) {
      setShow(true)
    }
  }, [])


  return (
    <div className="App">
      <HashRouter>
        {show &&
          <NavBar />
        }
        <Routes>
          <Route path='/login' element={<Login setShow={setShow} show={show} />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:id' element={<CourseDetail />} />
          <Route path='*' element={<Error404 />} />


          <Route element={<ProtectedRoutes />} >
            <Route path='/mycourses' element={<MyCourses />} />
            <Route path='/mycourses/id' element={<MyCourseById />} />
            <Route path='/user/:id' element={<UserProfile />} />
          </Route>

        </Routes>
        {show &&
          <Footer />
        }
      </HashRouter>
    </div>
  )
}

export default App
