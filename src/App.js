import { Route, Routes } from 'react-router-dom'
import './App.scss';
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import 'animate.css'

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/work/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
