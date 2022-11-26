import { Route, HashRouter, Routes } from 'react-router-dom'
import './App.css'
import CourseList from './components/CourseList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'
import CourseDetail from './pages/CourseDetail'
import Error404 from './pages/Error404'
import { useState } from 'react'


function App() {
  const [show, setShow] = useState(true)


  return (
    <div className="App">
      <HashRouter>
        {show &&
          <NavBar />
        }
        <Routes>
          <Route path='/login' element={<Login setShow={setShow} />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:id' element={<CourseDetail />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        {show &&
          <Footer />
        }
      </HashRouter>
    </div>
  )
}

export default App
