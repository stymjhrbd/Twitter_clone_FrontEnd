<script src="http://localhost:8097"></script>
import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signin from './components/SIgnin';
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {

  return (
    <GoogleOAuthProvider clientId="491769718001-084coi6l5j3uv5tjjg439q30raa0m5jh.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
