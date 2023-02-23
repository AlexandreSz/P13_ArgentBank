import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
