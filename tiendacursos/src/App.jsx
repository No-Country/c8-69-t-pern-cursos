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


function App() {

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course-detail' element={<CourseDetail />} />
        </Routes>
        <Footer />

      </HashRouter>
    </div>
  )
}

export default App
