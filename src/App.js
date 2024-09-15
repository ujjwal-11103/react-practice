import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Hooks from './Components/Hooks'
import ParentComp from './Components/Props/ParentComp'
import ChildComp from './Components/Props/ChildComp'
import GrandParent from './Components/Props/GrandParent'
import DataFetchFromContext from './ContextAPi/DataFetchFromContext'
import FetchGithubUser from './Custom Hooks/FetchGithubUser'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/grandParent' element={<GrandParent />} />
        <Route path='/parent' element={<ParentComp />} />
        <Route path='/child' element={<ChildComp />} />
        <Route path='/context' element={<DataFetchFromContext />} />
        <Route path='/githubUser' element={<FetchGithubUser />} />

      </Routes>
    </Router>
  )
}

export default App
