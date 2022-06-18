import { useState } from 'react'
import { Routes, Route,Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
      </nav>
      {/* 路由的配置 */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* 关于首页详情页 */}
      </Routes>
    </div>
  )
}

export default App