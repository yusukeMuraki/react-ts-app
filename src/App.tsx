import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Metronome } from './Metronome'
import Home from './Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Welcome app</h1>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/metronome">
          <Metronome />
        </Route>
      </Routes>
    </div>
  )
}

export default App
