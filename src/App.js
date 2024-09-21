import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Hooks from './Components/Hooks'
import ParentComp from './Components/Props/ParentComp'
import ChildComp from './Components/Props/ChildComp'
import GrandParent from './Components/Props/GrandParent'
import DataFetchFromContext from './ContextAPi/DataFetchFromContext'
import FetchGithubUser from './Custom Hooks/FetchGithubUser'
import MainComponent from './lazyLoading/MainComponent'
import Dashboard from './Protected Route/Dashboard'
import ProtectedRoute from './Protected Route/ProtectedRoute'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1 className='text-center'>Home Section</h1>} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/grandParent' element={<GrandParent />} />
        <Route path='/parent' element={<ParentComp />} />
        <Route path='/child' element={<ChildComp />} />
        <Route path='/context' element={<DataFetchFromContext />} />
        <Route path='/githubUser' element={<FetchGithubUser />} />
        <Route path='/lazy' element={<MainComponent />} />


        {/* PROTECTED ROUTE */}
        <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />

      </Routes>
    </Router>
  )
}

export default App
