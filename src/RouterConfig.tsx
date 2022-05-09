import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Metronome } from './Metronome'
import Home from './Home'

export const RouterConfig: React.VFC = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="metronome" element={<Metronome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
