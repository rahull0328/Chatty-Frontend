import React from 'react'
import { Routes } from 'react-router-dom'
import Login from './pages/shared/login'
import Chat from './pages/chat/chat'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
