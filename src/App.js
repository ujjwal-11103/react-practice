import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Hooks from './Components/Hooks'
import ParentComp from './Components/Props/ParentComp'
import ChildComp from './Components/Props/ChildComp'
import GrandParent from './Components/Props/GrandParent'
import DataFetchFromContext from './ContextAPi/DataFetchFromContext'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/grandParent' element={<GrandParent />} />
        <Route path='/parent' element={<ParentComp />} />
        <Route path='/child' element={<ChildComp />} />
        <Route path='/context' element={<DataFetchFromContext />} />

      </Routes>
    </Router>
  )
}

export default App
