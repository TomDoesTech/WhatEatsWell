import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
import axios from 'axios';

// port number defined in backend env
const port = 404;
axios.defaults.baseURL = `http://localhost:${port}`
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
