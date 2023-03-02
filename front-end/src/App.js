import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Features/store'
import Home from './pages/Home/Home'
import Login from './pages/Login/SignIn'
import User from './pages/Profil/Profil'
import Footer from './components/Footer/Footer'
import './index.css'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
      ,
    </div>
  )
}

export default App
