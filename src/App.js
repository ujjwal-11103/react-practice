import React from 'react'
import Hooks from './Components/Hooks'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/hooks' element={<Hooks />} />
      </Routes>
    </Router>
  )
}

export default App
