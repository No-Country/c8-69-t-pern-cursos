import { Route, HashRouter, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
