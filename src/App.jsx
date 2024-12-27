import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/shared/login'
import Chat from './pages/chat/chat'
import Profile from './pages/shared/profile'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </>
  )
}

export default App
