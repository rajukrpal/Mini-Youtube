

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './components/rootLayout/RootLayout'
import HomeScreen from './components/homeScreen/HomeScreen'

const App = () => {
  return (
    
    <div className='body h-[100vh]'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<HomeScreen />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
