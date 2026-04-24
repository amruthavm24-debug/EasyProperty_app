
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropertyDetail from './Pages/Detailpage'
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>        
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />        
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
