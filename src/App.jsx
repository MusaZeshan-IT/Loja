import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/common/Header.jsx'
import HeaderMain from './components/common/HeaderMain'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Header element={<Header />} />
        <HeaderMain element={<HeaderMain />} />
        <Navbar element={<Navbar />} />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer element={<Footer />} />
      </Router>
    </div>
  )
}

export default App
