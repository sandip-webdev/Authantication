import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Singup from './assets/Singup'
import Login from './Login'
import Home from './Home'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Singup/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
       <Route path='/home'element={<Home/>}></Route>
         
 
    
    </Routes>
    </BrowserRouter>
  )
}

export default App