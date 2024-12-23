import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/shared/login'
import Chat from './pages/chat/chat'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
