import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/common/Header'
import HeaderMain from './components/common/HeaderMain'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import NavMenuModal from './components/common/NavMenuModal'
import './App.css'
import Clothes from './pages/Clothes'

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  function handleCloseNavMenu() {
    setShowNavMenu(false);
  }
  function handleOpenNavMenu() {
    setShowNavMenu(true);
  }

  return (
    <div className="app">
      <Router>
        <NavMenuModal showNavMenu={showNavMenu} handleCloseNavMenu={handleCloseNavMenu} />
        <Header element={<Header />} />
        <HeaderMain element={<HeaderMain />} />
        <Navbar handleOpenNavMenu={handleOpenNavMenu} element={<Navbar />} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/clothes' element={<Clothes />} />
        </Routes>
        <Footer element={<Footer />} />
      </Router>
    </div>
  )
}

export default App
