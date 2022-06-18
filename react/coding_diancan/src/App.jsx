import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/index(全)'
import Footer from './components/Footer'
import Order from './components/Order'
import Home from './pages/Home'
import Find from './pages/Find'
import Mine from './pages/Mine'
import Cities from './pages/Cities'


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/find" element={<Find />}></Route>
          <Route path="/mine" element={<Mine />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/cities" element={<Cities />}></Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App